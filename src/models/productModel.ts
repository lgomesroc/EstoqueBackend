import pool from '../config/db';

export const getAllProducts = async () => {
  const [rows] = await pool.query('SELECT * FROM produtos');
  return rows;
};

export const createProduct = async (product: any) => {
  const { nome, descricao, imagem, valor, quantidade } = product;
  const [result] = await pool.execute(
    'INSERT INTO produtos (nome, descricao, imagem, valor, quantidade) VALUES (?, ?, ?, ?, ?)',
    [nome, descricao, imagem, valor, quantidade]
  );
  return (result as any).insertId;
};
