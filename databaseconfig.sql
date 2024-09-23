CREATE DATABASE sistema_academico;

CREATE TABLE IF NOT EXISTS salasdeaula (
    salasdeaulaid BIGSERIAL CONSTRAINT pk_salasdeaula PRIMARY KEY,
    descricao VARCHAR(60),
    localizacao VARCHAR(60),
    capacidade INTEGER,
    removido boolean DEFAULT false
);

INSERT INTO salasdeaula (descricao, localizacao, capacidade) VALUES 
    ('Sala 101', 'Bloco D', 40),
    ('Sala 102', 'Bloco D', 20),
    ('Laboratório 01', 'Bloco E', 18),
    ('Sala 103', 'Bloco E', 45),
    ('Auditório', 'Bloco C', 80);