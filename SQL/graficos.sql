CREATE DATABASE grafico;
USE grafico;

/*roles(cliente, empresa)*/

CREATE TABLE Usuarios(
    id_usuario int PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    correo VARCHAR(50) UNIQUE NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    clave VARCHAR(50) NOT NULL
);

CREATE TABLE Empresa(
    id_empresa INT PRIMARY KEY AUTO_INCREMENT,
    img_empresa TEXT NOT NULL,
    nombre_empresa VARCHAR(100) NULL,
    descripcion_empresa TEXT NULL,
    color_empresa VARCHAR(10) NULL,
    correo_empresa VARCHAR(50) NOT NULL,
    telefono_empresa VARCHAR(11) NULL,
    direccion_empresa VARCHAR(40) NULL,
    departamento_empresa VARCHAR(40) NULL,
    estado_Empresa ENUM("Activo", "Inactivo") NOT NULL,
    tipo_de_plan ENUM("Mensual", "Anual") NULL,
    fecha_de_vencimiento DATE NULL,
    clave_empresa VARCHAR(50) NOT NULL
);

CREATE TABLE Productos(
    id_producto INT PRIMARY KEY AUTO_INCREMENT,
    nombre_producto VARCHAR(50) NOT NUll,
    img_producto TEXT NOT NULL,
    descripcion_producto TEXT NULL,
    precio VARCHAR(6) NULL,
    id_empresa INT NOT NULL,
    FOREIGN KEY (id_empresa) REFERENCES Empresa(id_empresa)
);

CREATE TABLE Personalizaciones(
    id_personalizacion INT PRIMARY KEY AUTO_INCREMENT,
    nombre_presonalizacion VARCHAR(30) NOT NULL,
    img_personalizacion TEXT NOT NULL
);

CREATE TABLE EmpresaPersonalizacion(
    id_empresa_personalizacion INT PRIMARY KEY AUTO_INCREMENT,
    descripcion_personalizacion TEXT NULL,
    id_empresa INT NOT NULL,
    id_personalizacion INT NOT NULL,
    FOREIGN KEY(id_empresa) REFERENCES Empresa(id_empresa),
    FOREIGN KEY(id_personalizacion) REFERENCES Personalizaciones(id_personalizacion)
);
