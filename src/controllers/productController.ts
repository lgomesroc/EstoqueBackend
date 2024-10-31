import { Request, Response, NextFunction } from 'express';
import * as productModel from '../models/productModel';

export const getAllProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const products = await productModel.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const product = req.body;
  try {
    const productId = await productModel.createProduct(product);
    res.status(201).json({ id: productId });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const productId = req.params.id;
  try {
    const result = await productModel.deleteProduct(productId) as any;
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Produto não encontrado' });
    } else {
      res.status(200).json({ message: 'Produto excluído com sucesso!' });
    }
  } catch (error) {
    next(error);
  }
};
