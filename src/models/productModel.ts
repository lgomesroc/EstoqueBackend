import pool from '../config/db';
import { ResultSetHeader } from 'mysql2';

export const getAllProducts = async () => {
  const [rows] = await pool.query('SELECT * FROM produtos');
  return rows;
};

export const createProduct = async (product: any) => {
  const { nome, descricao, imagem, valor, quantidade } = product;
  const [result] = await pool.execute<ResultSetHeader>(
    'INSERT INTO produtos (nome, descricao, imagem, valor, quantidade) VALUES (?, ?, ?, ?, ?)',
    [nome, descricao, imagem, valor, quantidade]
  );
  return result.insertId;
};

export const deleteProduct = async (id: string) => {
  const [result] = await pool.execute<ResultSetHeader>('DELETE FROM produtos WHERE id = ?', [id]);
  return result;
};
