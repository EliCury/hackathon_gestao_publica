drop database if exists hackathon_gestao_publica;
create database if not exists hackathon_gestao_publica;

use hackathon_gestao_publica;

drop table if exists permissoes;
create table if not exists permissoes (
    id int auto_increment PRIMARY KEY,
    nome VARCHAR(255) not null
);

drop table if exists users;
create table if not exists users (
    id int auto_increment PRIMARY KEY,
    id_permissao int not null,
    matricula VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cargo VARCHAR(255) NOT NULL,
    assinatura VARCHAR(255) NOT NULL
);

drop table if exists status;
create table if not exists status (
    id int auto_increment PRIMARY KEY,
    nome VARCHAR(255) not null
);

drop table if exists tipos_comunicacao;
create table if not exists tipos_comunicacao (
    id int auto_increment PRIMARY KEY,
    nome VARCHAR(255) not null
);

drop table if exists comunicacao;
create table if not exists comunicacao (
    id int auto_increment PRIMARY KEY,
    id_status int not null,
    tipos_comunicacao int not null,
    data_criacao datetime,
    emissor VARCHAR(255) NOT NULL,
    assunto VARCHAR(255) NOT NULL,
    mensagem TEXT,
    observacao TEXT,
    emitido_por VARCHAR(255) NOT NULL,
    modo ENUM('publico', 'privado')
);

drop table if exists assinantes;
create table if not exists assinantes (
    id int auto_increment primary key,
    id_comunicacao int not null,
    status ENUM('pendente', 'assinado', 'recebido'),
    data_criacao datetime
);

drop table if exists receptores;
create table if not exists receptores (
    id int auto_increment primary key,
    id_comunicacao int not null,
    id_user int not null,
    data_criacao datetime
);

drop table if exists etiquetas;
create table if not exists etiquetas (
    id int auto_increment primary key,
    nome_etiqueta VARCHAR(255) not null
);

drop table if exists tags;
create table if not exists tags (
    id int auto_increment primary key,
    id_user int not null,
    nome_tags VARCHAR(255) not null
);


insert into users (id, id_permissao, matricula, nome, email, senha, cargo, assinatura) values (null, 1, '123', 'João', 'joao@teste.com', '123', 'aux', 'joaoaux');
insert into users (id, id_permissao, matricula, nome, email, senha, cargo, assinatura) values (null, 2, '456', 'Pedro', 'pedro@teste.com', '123', 'gerente', 'gerente123');
insert into users (id, id_permissao, matricula, nome, email, senha, cargo, assinatura) values (null, 3, '789', 'Ana', 'ana@teste.com', '123', 'secretaria', 'secretaria');
insert into users (id, id_permissao, matricula, nome, email, senha, cargo, assinatura) values (null, 4, '012', 'Paula', 'paula@teste.com', '123', 'agente de apoio', 'agentex');


-- testes inserção de dados
insert into status (id, nome) values (null, 'aberto');
insert into status (id, nome) values (null, 'pendente');
insert into status (id, nome) values (null, 'enviado');
insert into status (id, nome) values (null, 'recebido');

insert into tipos_comunicacao (id, nome) values (null, 'PAD');
insert into tipos_comunicacao (id, nome) values (null, 'Licitação');
insert into tipos_comunicacao (id, nome) values (null, 'Liberação curso / estágio');
insert into tipos_comunicacao (id, nome) values (null, 'Licença qualificação do magisterio');

insert into permissoes (id, nome) values (null, 'padrão');
insert into permissoes (id, nome) values (null, 'encarregado');
insert into permissoes (id, nome) values (null, 'gerente');
insert into permissoes (id, nome) values (null, 'diretor');
insert into permissoes (id, nome) values (null, 'secretario');

insert into
    comunicacao (id, id_status, tipos_comunicacao, data_criacao, emissor, assunto, mensagem, observacao, emitido_por, modo)
values
    (null, 1, 1, now(), 'teste', 'teste', 'msg', 'obs', 'teste', 'publico');
