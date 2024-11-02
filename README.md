# Documentação do Sistema de Estoque

![Sistema de Estoque](f2d52f38-2793-427a-8321-df70e06dab17.webp)

## 1. Visão Geral

Este projeto é um sistema de gerenciamento de estoque desenvolvido com TypeScript, Node.js e MySQL. O sistema permite o gerenciamento de produtos e usuários, com funcionalidades para criação e listagem de itens.


## 2. Estrutura das Pastas do Projeto

A estrutura das pastas do projeto é organizada da seguinte maneira:

```bash

sistema-estoque/
│
├── backend/                               # Pasta principal do backend
│   ├── src
│   │   ├── config/                        # Configurações do banco de dados
│   │   │   └── db.ts                      # Configuração da conexão com o MySQL
│   │   ├── controllers/                   # Lógica dos controladores (API)
│   │   │   ├── productController.ts       # Controlador de produtos
│   │   │   └── userController.ts          # Controlador de usuários
│   │   ├── routes/                        # Definição das rotas da API
│   │   │   ├── productRoute.ts            # Rotas de produtos
│   │   │   └── userRoute.ts               # Rotas de usuários
│   │   ├── models/                        # Modelos de dados
│   │   │   ├── productModel.ts            # Modelo de produtos
│   │   │   └── userModel.ts               # Modelo de usuários
│   │   ├── middlewares/                   # Middlewares (futuro)
│   │   ├── app.ts                         # Configuração de rotas
│   │   └── server.ts                      # Configuração do servidor
├── estoque_db.sql                         # Backup do banco de dados
├── README.md                              # Documentação do projeto
├── .gitignore
├── LICENSE
└── package.json                           # Dependências do projeto
```
## 3. Histórico de Desenvolvimento
### 3.1. Configuração do Ambiente

    Instalação do Node.js e MySQL: O ambiente foi configurado com Node.js para o backend e MySQL como sistema de gerenciamento de banco de dados.

### 3.2. Criação do Banco de Dados

    **Banco de Dados** : Um banco de dados chamado estoque_db foi criado com as seguintes tabelas:
        __usuarios__: Armazena informações dos usuários.
        __produtos__: Armazena informações dos produtos.

```sql

CREATE DATABASE estoque_db;

USE estoque_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    imagem BLOB,
    valor DECIMAL(10, 2) NOT NULL,
    quantidade INT NOT NULL
);
```
### 3.3. Desenvolvimento da API

    Servidor: Um servidor foi configurado utilizando TypeScript e Express.js. O servidor roda na porta 3001 e expõe rotas para gerenciamento de produtos.

    Endpoints Implementados:
        'GET /products': Lista todos os produtos.
        'POST /products': Cria um novo produto.
        'GET /users': Lista todos os usuários.
        'POST /users': Cria um novo usuário.
        'DELETE /users/:id': Exclui um usuário pelo ID.

### 3.4. Conexão com o Banco de Dados

    Conexão: A conexão com o banco de dados MySQL foi implementada utilizando mysql2/promise. O código para a configuração da conexão é o seguinte:

```typescript

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '5577azcD@#',
  database: 'estoque_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(connection => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
    connection.release();
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

export default pool;
```
### 3.5. Testes da API

    Testes com Postman: A API foi testada utilizando o Postman, onde as requisições __POST__, __GET__ e __DELETE__ retornaram os resultados esperados. O status 201 (Created) foi retornado __ao criar novos produtos e usuários__, o status 200 (OK) ao __listar produtos e usuários__, e o status 200 (OK) ao __excluir um usuário__.

### 3.6. Exportação do Banco de Dados

    O banco de dados foi exportado para um arquivo SQL (estoque_db.sql) para facilitar o backup e a restauração futura.

```bash

mysqldump -u root -p estoque_db > ~/Projects/sistema-estoque/backend/estoque_db.sql
```
## 4. Considerações Finais

O projeto está em andamento e novas funcionalidades serão implementadas, como o gerenciamento de usuários, autenticação e controle de acesso. A estrutura do projeto foi planejada para ser escalável e de fácil manutenção.

# Atualizações (30/10 e 31/10)
Implementação das funcionalidades de criação e exclusão de usuários e produtos.

Utilização do bcrypt para criptografia de senhas.

Criação das tabelas usuarios e produtos no banco de dados.

Testes das APIs utilizando Postman.