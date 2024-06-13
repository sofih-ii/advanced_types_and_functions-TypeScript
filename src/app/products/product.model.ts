import {Category} from './../categories/categoory.model'
export type Sizes = 'M'|'L'|'S'|'XS'|'XL';
export interface Product {
    id:string | number;
    title: string;
    creatAt : Date;
    stock: number;
    size?: Sizes;
    category:Category;
}