import type { Product } from "../types/Products";

let rout: string = "http://localhost:8080/api"

export async function getProducts(): Promise<Product[]> {
    try {
        const response = await fetch(`${rout}/products`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })

        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.status}`);
        }

        const data = await response.json();

        return data.map((item: Product) => ({
            id: item.id,
            name: item.name,
            saleValue: item.saleValue,
            description: item.description,
            minimumQuantity: item.minimumQuantity,
            categories: item.categories,
        }));

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function postProducts(product: Product) {
    try {
        const response = await fetch(`${rout}/products`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(product)
        })

        if (response.status != 201) {
            throw new Error(`Erro na solicitação: ${response.status}`);
        }


    } catch (error) {
        console.log(error);
        
    }
}

export async function getProductsId(id: string): Promise<Product> {
    try {
        const response = await fetch(`${rout}/products/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })

        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.status}`);
        }

        const data = await response.json();

        return data.map((item: Product) => ({
            id: item.id,
            name: item.name,
            saleValue: item.saleValue,
            description: item.description,
            minimumQuantity: item.minimumQuantity,
            categories: item.categories,
        }));


    } catch (error) {
        throw error;
    }
}
export async function deleteProducts(id: String) {
    try {
        const response = await fetch(`${rout}/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            }
        })

        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.status}`);
        }
    } catch (error) {
        throw error;
    }
}
