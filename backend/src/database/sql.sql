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


insert into users (id, matricula, nome, email, senha, cargo, assinatura) values (null, '123', 'João', 'joao@teste.com', '123', 'aux', 'joaoaux');
insert into users (id, matricula, nome, email, senha, cargo, assinatura) values (null, '456', 'Pedro', 'pedro@teste.com', '123', 'gerente', 'gerente123');
insert into users (id, matricula, nome, email, senha, cargo, assinatura) values (null, '789', 'Ana', 'ana@teste.com', '123', 'secretaria', 'secretaria');
insert into users (id, matricula, nome, email, senha, cargo, assinatura) values (null, '012', 'Paula', 'paula@teste.com', '123', 'agente de apoio', 'agentex');


----- testes inserção de dados
insert into status (id, nome) values (null, 'aberto');
insert into status (id, nome) values (null, 'pendente');
insert into status (id, nome) values (null, 'enviado');
insert into status (id, nome) values (null, 'recebido');

insert into tipos_comunicacao (id, nome) values (null, 'PAD');
insert into tipos_comunicacao (id, nome) values (null, 'Licitação');
insert into tipos_comunicacao (id, nome) values (null, 'Liberação curso / estágio');
insert into tipos_comunicacao (id, nome) values (null, 'Licença qualificação do magisterio');

insert into
    comunicacao (id, id_status, tipos_comunicacao, data_criacao, emissor, assunto, mensagem, observacao, emitido_por, modo)
values
    (null, 1, 1, now(), 'teste', 'teste', 'msg', 'obs', 'teste', 'publico');
