// src/app.ts
import express from 'express';
import productRoutes from './routes/productRoute';
import userRoutes from './routes/userRoute'; // Importar as rotas de usuários

const app = express();
const PORT = 3001;

app.use(express.json());

// Middleware de log básico
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use('/products', productRoutes);
app.use('/users', userRoutes); // Adicionar a rota de usuários

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
