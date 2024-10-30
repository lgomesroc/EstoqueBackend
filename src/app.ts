import express from 'express';
import productRoutes from './routes/product';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
