create database hackathon_gestao_publica;

use hackathon_gestao_publica;

create table users (
    id int auto_increment PRIMARY KEY,
    matricula VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cargo VARCHAR(255) NOT NULL,
    assinatura VARCHAR(255) NOT NULL
);

create table comunicacao (
    id int auto_increment PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    data_criacao DATE,
    emissor VARCHAR(255) NOT NULL,
    assunto VARCHAR(255) NOT NULL,
    mensagem TEXT,
    observacao TEXT,
    emitido_por VARCHAR(255) NOT NULL,
    modo ENUM('publico', 'privado')
);

create table assinantes (
    id int auto_increment primary key,
    id_comunicacao int not null,
    status ENUM('pendente', 'assinado', 'recebido'),
    data_criacao DATE
);

create table receptores (
    id int auto_increment primary key,
    id_comunicacao int not null,
    id_user int not null,
    data_criacao DATE
);

