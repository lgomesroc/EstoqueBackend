import pool from '../config/db';

export const getAllProducts = async () => {
  const [rows] = await pool.query('SELECT * FROM produtos');
  return rows;
};

export const createProduct = async (product: { nome: string; descricao: string; valor: number; imagem: string; quantidade: number }) => {
  const [result] = await pool.query('INSERT INTO produtos (nome, descricao, valor, imagem, quantidade) VALUES (?, ?, ?, ?, ?)', 
  [product.nome, product.descricao, product.valor, product.imagem, product.quantidade]);
  
  // Acessando insertId corretamente
  return (result as any).insertId; // Use 'as any' para evitar erros de tipo
};
