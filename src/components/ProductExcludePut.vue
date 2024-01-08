<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import Sidebar from '../components/SideBar.vue'


import type { Product } from '../types/ApiProducts';

const rout = "http://localhost:8080/api"

let products = ref<Product[]>([])

async function getProducts() {
  try {
    const response = await fetch(`${rout}/products`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();


    // products = data as VieProduct[];
    products.value = data.map((item: Product) => ({
      id: item.id,
      name: item.name,
      saleValue: item.saleValue,
      description: item.description,
      categories: item.categories
    }));


    console.log(products.value);
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
  }
}

async function deleteProducts(id: String) {
  console.log(id);
  try {

    const response = await fetch(`${rout}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      }
    });
    console.log(response);

  } catch (error) {
    console.error('Erro ao excluir produtos: ' + error)
  }
  getProducts();
}


onMounted(() => {
  getProducts();
});


</script>


<template>
  <div v-for="product in products" class="m-2 flex rounded-lg border-2 border-black grid justify-items-start w-[800px]">
    <div class="flex rounded-md p-3">
      <div class="">
        <img class="w-[400px] h-[400px] object-cover " src="\img\sem-foto1.jpg">
      </div>
      <div class="flex flex-col justify-center itens-center text-xl">
        <span class="truncate">id: {{ product.id }} </span>
        <span>name : {{ product.name }} </span>
        <span>description : {{ product.description }} </span>
        <span>saleValue : R$ {{ product.saleValue.toFixed(2) }} </span>
        <span v-for="catagory in product.categories">categoria: {{ catagory.name + "; " }}</span>
        <button @click="deleteProducts(product.id)"
          class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Excluir</button>
        <input type="button" value="Editar"
          class="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
      </div>
    </div>
  </div>
</template>