import { Request, Response, NextFunction } from 'express';
import * as userModel from '../models/userModel';

export const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const user = req.body;
  try {
    const userId = await userModel.createUser(user);
    res.status(201).json({ id: userId });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.params.id;
  try {
    const result = await userModel.deleteUser(userId) as any;
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Usuário não encontrado' });
    } else {
      res.status(200).json({ message: 'Usuário excluído com sucesso!' });
    }
  } catch (error) {
    next(error);
  }
};
