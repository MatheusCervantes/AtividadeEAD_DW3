# Atividade EAD - DW3

Este repositório contém a atividade EAD de Desenvolvimento Web 3, onde foi desenvolvido um sistema utilizando **Node.js**, **PostgreSQL**, e testes de API com a extensão **REST Client** do **VSCode**.

## Membros do Grupo

- [Camily Milsoni Rodrigues](https://github.com/camilymilsoni)
- [Matheus de Oliveira Cortez Cervantes](https://github.com/MatheusCervantes)

## Requisitos

- **[Node.js](https://nodejs.org/en/)**: versão 20.17.0 ou superior.
- **[PostgreSQL](https://www.postgresql.org/download/)**: Um banco de dados PostgreSQL configurado.
- **[VSCode](https://code.visualstudio.com/)**: Editor de código recomendado para testar a API com a extensão **REST Client**.

## Passos para Rodar o Projeto

### 1. Clonar o Repositório

Clone o repositório usando o comando abaixo:

```bash
git clone https://github.com/MatheusCervantes/AtividadeEAD_DW3.git
```

### 2. Instalar Dependências

Acesse o diretório do projeto e execute o comando para instalar as dependências:

```bash
cd AtividadeEAD_DW3
npm install
```

### 3. Configurar Banco de Dados

Siga os passos abaixo para configurar o banco de dados PostgreSQL:

1. **Acessar o PostgreSQL**:
   
   No terminal, entre no PostgreSQL com o comando:

   ```bash
   psql -U seu_usuario -h localhost
   ```

   Substitua `seu_usuario` pelo seu usuário PostgreSQL.

2. **Criar o Banco de Dados e Tabelas**:

   Dentro do PostgreSQL, use o comando abaixo para rodar o arquivo `databaseconfig.sql` e criar o banco de dados e suas tabelas:

   ```bash
   \i caminho_para_o_arquivo/databaseconfig.sql
   ```

   Certifique-se de fornecer o caminho correto para o arquivo `databaseconfig.sql`, que está localizado na raiz do projeto.

3. Atualize o arquivo `.env` com as credenciais do seu banco de dados, por exemplo:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=sistema_academico
DB_USER=seu_usuario
DB_PASS=sua_senha
```

### 4. Rodar o Sistema

Após configurar o banco de dados, inicie a aplicação com o seguinte comando:

```bash
node app.js
```

### 5. Testar as APIs

Recomendamos o uso do **[Visual Studio Code (VSCode)](https://code.visualstudio.com/)** com a extensão **[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)** para rodar os testes da API.

#### Como usar o REST Client:

1. Instale a extensão **[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)** no VSCode.
2. Abra o arquivo `/tests/testSalasDeAula.rest`.
3. Clique em **Send Request** nas requisições para testar o funcionamento do sistema.

### 6. Funcionamento

Agora, o sistema estará rodando e você poderá testar as funcionalidades através das requisições contidas no arquivo `.rest`.

## Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/en/)**: Plataforma para execução do JavaScript no lado do servidor.
- **[PostgreSQL](https://www.postgresql.org/download/)**: Sistema de gerenciamento de banco de dados relacional.
- **[VSCode REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)**: Extensão para testar APIs no Visual Studio Code.
