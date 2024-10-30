import { Request, Response } from 'express';
import * as productModel from '../models/productModel';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productModel.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos.' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProductId = await productModel.createProduct(req.body);
    res.status(201).json({ id: newProductId });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto.' });
  }
};
