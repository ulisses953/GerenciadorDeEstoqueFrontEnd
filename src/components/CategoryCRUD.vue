<script setup lang="ts">
import type { Category } from '../types/Category';
import { getCategory, deleteCategory } from '../stores/Category'
import { ref, type Ref, reactive,onMounted } from 'vue';
import { postCategory } from "../stores/Category";


let listCategory: Ref<Category[]> =  ref<Category[]>([]);
let viewAddDisableEnable: Ref<boolean> = ref(true);
let editIsId:Ref<String> = ref("");

let form: Category = reactive<Category>({
    name: '',
    description: '',
});


onMounted(async ()=>{
    listCategory.value = await getCategory();
    
});

async function formDelete(id: string) {
    await deleteCategory(id);
    listCategory.value = await getCategory();
}

async function addProduct(category: Category) {
    await postCategory(category);
    viewAddDisableEnable.value = !viewAddDisableEnable.value;
    listCategory.value = await getCategory();

    form.description = '';
    form.name = '';
}

async function formUpdate(id: String, name : String,description: String ) {

    editIsId.value = "";
}
</script>
    
<template>
    <div>
        <button
            class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 m-2"
            @click="viewAddDisableEnable = !viewAddDisableEnable">Adicionar / Ver Categorias </button>

        <div v-if="viewAddDisableEnable == false">
            <div class="p-2">
                <label>Name : </label>
                <input v-model="form.name" type="text" class="ml-2">
            </div>
            <div class="p-2">
                <label>Descrisao :</label>
                <input v-model="form.description" type="text" class="ml-2">
            </div>
            <button
                class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                @click="addProduct(form)">Salvar</button>
        </div>

        <div v-else v-for="category in listCategory" class="m-2 rounded-lg border-2 border-black grid w-[500px]">
            <div class="flex flex-col justify-center itens-center text-xl">
                <div class="p-2">
                    <span>id: {{ category.id }}</span>
                </div>

                <div class="p-2">
                    <span>name : </span>
                    <input type="text" :disabled="editIsId != category.id" :value="category.name">
                </div>

                <div class="p-2">
                    <span>description : </span>
                    <input type="text" :disabled="editIsId != category.id" :value="category.description">
                </div>

                <div v-if="editIsId != category.id">
                    <button 
                    class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none m-1 ease-linear transition-all duration-150"
                    @click="formDelete(category.id!)">Excluir</button>
                <button
                    class="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none m-1 ease-linear transition-all duration-150"
                    @click="editIsId = category.id!">Editar</button>
                </div>

                <div v-else>
                    <button 
                    class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none m-1 ease-linear transition-all duration-150"
                    @click="editIsId = ``">Sair</button>
                <button
                    class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none m-1 ease-linear transition-all duration-150"
                   @click="">Salvar</button>
                </div>
                
            </div>
        </div>
    </div>
</template>