// src/models/userModel.ts
import pool from '../config/db';
import { ResultSetHeader } from 'mysql2';

export const getAllUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM usuarios');
  return rows;
};

export const createUser = async (user: any) => {
  const { nome, email, senha } = user; // Supondo que os campos sejam nome, email e senha
  const [result] = await pool.execute<ResultSetHeader>(
    'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha] // A senha deve ser criptografada antes de ser armazenada
  );
  return result.insertId;
};

export const deleteUser = async (id: string) => {
  const [result] = await pool.execute<ResultSetHeader>('DELETE FROM usuarios WHERE id = ?', [id]);
  return result; // Retorna o resultado da operação de exclusão
};
