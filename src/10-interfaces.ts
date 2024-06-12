type Sizes = 'M'|'L'|'S'|'XS'|'XL';
type Userid = string | number; //primitivos 
interface Product {
    id:string | number;
    title: string;
    creatAt : Date;
    stock: number;
    size?: Sizes;
}
const products: Product[] = [];
products.push({
    id: '1',
    title: 'p1',
    creatAt: new Date(1991, 3, 6),
    stock: 10,
    size: 'S'
});

const addProduct = (data: Product)=>{
    products.push(data);
}