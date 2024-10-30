import express from 'express';
import productRoutes from './routes/product'; // Certifique-se de que o caminho está correto

const app = express();
const PORT = 3001;

app.use(express.json()); // Para interpretar o corpo da requisição como JSON
app.use('/products', productRoutes); // Use a rota corretamente

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
