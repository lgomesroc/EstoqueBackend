




backend/
│
├── src/
│   ├── app.ts          # Arquivo principal da aplicação
│   ├── routes/         # Rotas da API
│   │   └── product.ts  # Rotas relacionadas a produtos
│   ├── controllers/    # Lógica de controle
│   │   └── productController.ts  # Controle para produtos
│   ├── models/         # Modelos de dados
│   │   └── productModel.ts  # Modelo para produtos
│   ├── middleware/     # Middleware (como autenticação)
│   │   └── auth.ts     # Middleware de autenticação
│   └── config/         # Configurações (como conexões com o banco)
│       └── db.ts       # Configuração do banco de dados
│
├── package.json        # Dependências do projeto
├── tsconfig.json       # Configurações do TypeScript
└── ...                 # Outros arquivos necessários