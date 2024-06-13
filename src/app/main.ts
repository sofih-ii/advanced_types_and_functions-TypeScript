import { addProduct } from "./products/products.service";

addProduct({
    id: '1',
    title: 'p1',
    creatAt: new Date(),
    stock: 90,
    category:{
        id: '12',
        name: 'c1'
    }
})