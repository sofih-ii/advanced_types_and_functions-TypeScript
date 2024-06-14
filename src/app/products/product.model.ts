import {Category} from './../categories/categoory.model'
import {BaseModel} from './../base.model'
export type Sizes = 'M'|'L'|'S'|'XS'|'XL';
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  category: Category;
  isNew: boolean;
  tags: string[];
}