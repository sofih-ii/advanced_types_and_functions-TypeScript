import {Product} from './product.model'
export interface CreateProductDta extends Omit<Product, 'id' | 'createdAt' | 'updatedAt'| 'category'>{
    categoryId: string;
} 

type example = Pick<Product, 'color' | 'description'>;

export interface UpdateProductDto extends Partial<CreateProductDta>{}

type example2 = Required<Product>;
export interface findProductDto extends Readonly<Partial<Product>>{}
