import type { Category } from "../types/ApiCategory";

const rout = "http://localhost:8080/api"

export async function getCategory(): Promise<Category[]> {
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

        return data.map((item: Category) => ({
            id: item.id,
            name: item.name,
            description : item.description
        }));

    } catch (error) {
        console.log(error);
        return []
    }
}

export async function getCategoryId(id:String): Promise<Category>{
    try {
        const response = await fetch(`${rout}/categories/${id}`,{
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })

        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.status}`);        
        }
        
        const data = await response.json();

        return data.map((item: Category) => ({
            id: item.id,
            name: item.name,
            description : item.description
        }));

    }catch (error) {
        console.log();
        throw error; 
    }
}

export async function postCategory(category : Category){
    try {
        const response = await fetch(`${rout}/categories`,{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(category)
        })

        if(response.status != 201){
            throw new Error(`Erro na solicitação: ${response.status}`);        
        }
    } catch (error) {
        throw error; 
    }
}

export async function deleteCategory(id : string ){
    try {
        const response = await fetch(`${rout}/categories/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            }
        })

        if(!response.ok){
            throw new Error(`Erro na solicitação: ${response.status}`);        
        }
    } catch (error) {
        throw error; 
    }
}


