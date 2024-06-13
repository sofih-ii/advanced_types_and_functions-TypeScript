import { Product } from "../products/product.model";
import { User } from "../users/user.model";

export interface Order {
    id: string,
    creatAt: Date,
    products: Product[];
    user: User;
}