 import type { Category } from './ApiCategory';

export interface Product {
    id : string,
    name : string,
    description : string,
    saleValue : any
    categories : Category[]
}
