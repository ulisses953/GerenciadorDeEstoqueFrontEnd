import type { Product } from "../types/ApiProducts";

let rout:string = "http://localhost:8080/api"

export async function getProducts():Promise<Product[]>{
    try {
        const response = await fetch(`${rout}/categories`, {
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
            description : item.description
        }));

    } catch (error) {
        console.log(error);
        return []
    }
}