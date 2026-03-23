-- =====================================================================
-- SCRIPT DDL: SISTEMA ACADÉMICO - CON UUID
-- MOTOR: PostgreSQL
-- =====================================================================

-- ---------------------------------------------------------
-- 1. TABLAS PRINCIPALES (HERENCIA, SOFT DELETES, UUID)
-- ---------------------------------------------------------

CREATE TABLE usuario (
    id_usuario UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombres VARCHAR(100) NOT NULL,
    ap_paterno VARCHAR(100) NOT NULL,
    ap_materno VARCHAR(100),
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL, 
    estado BOOLEAN DEFAULT TRUE, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_usuario_transaccion UUID -- Cambiado a UUID
);

CREATE TABLE docente (
    id_usuario UUID PRIMARY KEY, -- FK y PK ahora son UUID
    cargo VARCHAR(50) NOT NULL,
    especialidad VARCHAR(150),
    estado BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_usuario_transaccion UUID, -- Cambiado a UUID
    CONSTRAINT fk_docente_usuario FOREIGN KEY (id_usuario) 
        REFERENCES usuario(id_usuario) ON DELETE RESTRICT
);

CREATE TABLE aula (
    id_aula SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    capacidad INT NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    estado BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_usuario_transaccion UUID -- Cambiado a UUID
);

CREATE TABLE comunicado (
    id_comunicado SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo VARCHAR(50) NOT NULL,
    url_archivo VARCHAR(255),
    estado BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_usuario_transaccion UUID -- Cambiado a UUID
);

CREATE TABLE jefe_catedra (
    id_jefe SERIAL PRIMARY KEY,
    id_usuario_docente UUID NOT NULL UNIQUE, -- Cambiado a UUID
    anio_ini INT NOT NULL,
    anio_fin INT,
    biografia TEXT,
    estado BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_usuario_transaccion UUID, -- Cambiado a UUID
    CONSTRAINT fk_jefe_docente FOREIGN KEY (id_usuario_docente) 
        REFERENCES docente(id_usuario) ON DELETE RESTRICT
);

CREATE TABLE guia_practica (
    id_guia SERIAL PRIMARY KEY,
    id_usuario_docente UUID, -- Cambiado a UUID
    titulo VARCHAR(200) NOT NULL,
    objetivos TEXT NOT NULL,
    url_vista_previa VARCHAR(255),
    url_archivo VARCHAR(255) NOT NULL,
    estado BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_usuario_transaccion UUID, -- Cambiado a UUID
    CONSTRAINT fk_guia_docente FOREIGN KEY (id_usuario_docente) 
        REFERENCES docente(id_usuario) ON DELETE RESTRICT
);

CREATE TABLE grupo (
    id_grupo SERIAL PRIMARY KEY,
    cod_grupo VARCHAR(20) UNIQUE NOT NULL,
    id_usuario_docente UUID, -- Cambiado a UUID
    estado BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_usuario_transaccion UUID, -- Cambiado a UUID
    CONSTRAINT fk_grupo_docente FOREIGN KEY (id_usuario_docente) 
        REFERENCES docente(id_usuario) ON DELETE RESTRICT
);

CREATE TABLE horario_grupo (
    id_horario SERIAL PRIMARY KEY,
    id_grupo INT NOT NULL,
    id_aula INT NOT NULL,
    dia_semana VARCHAR(15) NOT NULL,
    hora_ini TIME NOT NULL,
    hora_fin TIME NOT NULL,
    estado BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_usuario_transaccion UUID, -- Cambiado a UUID
    CONSTRAINT fk_horario_grupo FOREIGN KEY (id_grupo) 
        REFERENCES grupo(id_grupo) ON DELETE RESTRICT,
    CONSTRAINT fk_horario_aula FOREIGN KEY (id_aula) 
        REFERENCES aula(id_aula) ON DELETE RESTRICT
);

-- ---------------------------------------------------------
-- 2. TABLA DE BITÁCORA (AUDITORÍA)
-- ---------------------------------------------------------

CREATE TABLE bitacora_auditoria (
    id_log SERIAL PRIMARY KEY,
    nombre_tabla VARCHAR(50) NOT NULL,
    operacion VARCHAR(10) NOT NULL, 
    id_usuario_app UUID, -- Cambiado a UUID
    datos_anteriores JSONB,
    datos_nuevos JSONB,
    fecha_operacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_bitacora_usuario FOREIGN KEY (id_usuario_app) 
        REFERENCES usuario(id_usuario) ON DELETE SET NULL
);

-- ---------------------------------------------------------
-- 3. FUNCIÓN Y TRIGGERS
-- ---------------------------------------------------------

CREATE OR REPLACE FUNCTION fn_registrar_auditoria_y_softdelete() 
RETURNS TRIGGER AS $$
DECLARE
    v_id_usuario_app UUID; -- Declaración actualizada a UUID
BEGIN
    IF (TG_OP = 'DELETE') THEN
        RAISE EXCEPTION 'Operación DELETE físico denegada en %. Se requiere UPDATE estado = FALSE (Soft Delete).', TG_TABLE_NAME;
    END IF;

    IF (TG_OP = 'UPDATE') THEN
        -- Casteo seguro a UUID desde el JSON
        v_id_usuario_app := NULLIF(row_to_json(NEW)->>'id_usuario_transaccion', '')::UUID;
        
        IF (OLD.estado = TRUE AND NEW.estado = FALSE) THEN
            INSERT INTO bitacora_auditoria (nombre_tabla, operacion, id_usuario_app, datos_anteriores, datos_nuevos)
            VALUES (TG_TABLE_NAME, 'SOFT_DEL', v_id_usuario_app, row_to_json(OLD), row_to_json(NEW));
        ELSE
            NEW.updated_at = CURRENT_TIMESTAMP;
            INSERT INTO bitacora_auditoria (nombre_tabla, operacion, id_usuario_app, datos_anteriores, datos_nuevos)
            VALUES (TG_TABLE_NAME, 'UPDATE', v_id_usuario_app, row_to_json(OLD), row_to_json(NEW));
        END IF;
        
        RETURN NEW;
        
    ELSIF (TG_OP = 'INSERT') THEN
        -- Casteo seguro a UUID desde el JSON
        v_id_usuario_app := NULLIF(row_to_json(NEW)->>'id_usuario_transaccion', '')::UUID;
        
        INSERT INTO bitacora_auditoria (nombre_tabla, operacion, id_usuario_app, datos_nuevos)
        VALUES (TG_TABLE_NAME, 'INSERT', v_id_usuario_app, row_to_json(NEW));
        RETURN NEW;
    END IF;
    
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- ---------------------------------------------------------
-- 4. TRIGGERS
-- ---------------------------------------------------------

CREATE TRIGGER trg_auditar_usuario BEFORE INSERT OR UPDATE OR DELETE ON usuario FOR EACH ROW EXECUTE FUNCTION fn_registrar_auditoria_y_softdelete();
CREATE TRIGGER trg_auditar_docente BEFORE INSERT OR UPDATE OR DELETE ON docente FOR EACH ROW EXECUTE FUNCTION fn_registrar_auditoria_y_softdelete();
CREATE TRIGGER trg_auditar_aula BEFORE INSERT OR UPDATE OR DELETE ON aula FOR EACH ROW EXECUTE FUNCTION fn_registrar_auditoria_y_softdelete();
CREATE TRIGGER trg_auditar_comunicado BEFORE INSERT OR UPDATE OR DELETE ON comunicado FOR EACH ROW EXECUTE FUNCTION fn_registrar_auditoria_y_softdelete();
CREATE TRIGGER trg_auditar_jefe_catedra BEFORE INSERT OR UPDATE OR DELETE ON jefe_catedra FOR EACH ROW EXECUTE FUNCTION fn_registrar_auditoria_y_softdelete();
CREATE TRIGGER trg_auditar_guia_practica BEFORE INSERT OR UPDATE OR DELETE ON guia_practica FOR EACH ROW EXECUTE FUNCTION fn_registrar_auditoria_y_softdelete();
CREATE TRIGGER trg_auditar_grupo BEFORE INSERT OR UPDATE OR DELETE ON grupo FOR EACH ROW EXECUTE FUNCTION fn_registrar_auditoria_y_softdelete();
CREATE TRIGGER trg_auditar_horario BEFORE INSERT OR UPDATE OR DELETE ON horario_grupo FOR EACH ROW EXECUTE FUNCTION fn_registrar_auditoria_y_softdelete();