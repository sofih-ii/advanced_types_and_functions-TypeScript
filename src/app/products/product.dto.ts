import {Product} from './product.model'
export interface CreateProductDta extends Omit<Product, 'id' | 'createdAt' | 'updatedAt'| 'category'>{
    categoryId: string;
} 