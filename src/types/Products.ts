import type { Category } from './Category';

export interface Product {
    id?: string,
    name : string,
    description : string,
    saleValue : number,
    minimumQuantity : number,
    categories?: Category[],
}
