import {Category} from './../categories/categoory.model'
import {BaseModel} from './../base.model'
export type Sizes = 'M'|'L'|'S'|'XS'|'XL';
export interface Product extends BaseModel{
    title: string;
    stock: number;
    size?: Sizes;
    category:Category;
}