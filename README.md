```markdown
# Atividade EAD - DW3

Este repositório contém a atividade EAD de Desenvolvimento Web 3, onde foi desenvolvido um sistema que utiliza Node.js, PostgreSQL, e testes de API usando a extensão REST Client do VSCode.

## Membros do Grupo

- [Matheus de Oliveira Cortez Cervantes](https://github.com/MatheusCervantes)
- [Camily Milsoni Rodrigues](https://github.com/camilymilsoni)

## Requisitos

- **Node.js**: versão 20.17.0 ou superior.
- **PostgreSQL**: Um banco de dados PostgreSQL configurado.

## Passos para Rodar o Projeto

### 1. Clonar o Repositório

Primeiro, clone o repositório:

```bash
git clone https://github.com/MatheusCervantes/AtividadeEAD_DW3.git
```

### 2. Instalar Dependências

Entre no diretório do projeto e rode o comando abaixo para instalar todas as dependências:

```bash
cd AtividadeEAD_DW3
npm install
```

### 3. Configurar Banco de Dados

É necessário um banco de dados PostgreSQL para o sistema funcionar corretamente.

1. Crie um banco de dados PostgreSQL. Você pode utilizar o arquivo `databaseconfig.sql` localizado na raiz do projeto para criar o banco e as tabelas necessárias automaticamente.

2. No seu terminal, rode o seguinte comando dentro do diretório do projeto para configurar o banco de dados:

```bash
psql -U seu_usuario -d sua_base_de_dados -f databaseconfig.sql
```

3. Configure o arquivo `.env` com as informações do seu banco de dados. Por exemplo:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=sua_base_de_dados
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
```

### 4. Rodar o Sistema

Após configurar o banco de dados, rode o seguinte comando para iniciar a aplicação:

```bash
node app.js
```

### 5. Testar as APIs

Recomendo utilizar o **Visual Studio Code (VSCode)** com a extensão **REST Client** para rodar os testes da API.

#### Como usar o REST Client:

1. Instale a extensão **REST Client** no VSCode.
2. Abra o arquivo `/tests/testSalasDeAula.rest`.
3. Clique em **Send Request** nas requisições para visualizar o funcionamento do sistema.

### 6. Funcionamento

Com isso, o sistema estará rodando e você poderá testar as funcionalidades através das requisições no arquivo `.rest`.

## Tecnologias Utilizadas

- **Node.js**
- **PostgreSQL**
- **VSCode REST Client** para testar as APIs
```
