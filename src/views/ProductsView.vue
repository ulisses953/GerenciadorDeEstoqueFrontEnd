<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';

import type { Product } from '../types/ApiProducts';

const rout = "http://localhost:8080/api"

let products = ref<Product[]>([])

async function fetchProducts() {
  try {
    const response = await fetch(`${rout}/products`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();


    // products = data as VieProduct[];
    products.value = data.map((item : Product) => ({
      id: item.id,
      name: item.name,
      saleValue: item.saleValue,
      description : item.description
    }));


    console.log(products.value);
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
  }
}

// Executa a busca dos produtos quando o componente for montado
onMounted(() => {
  fetchProducts();
});


</script>


<template>
  <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">Produtos Registrados e suas categorias</h1>
  <div class="">
    <div v-for="product in products" class="grid-column: auto rounded-lg border-2 border-black grid justify-items-start">
      <div class="rounded-md">
        <span>id: {{ product.id }} </span>
        <span>name : {{ product.name }} </span>
        <span>description : {{ product.description }} </span>
        <span>saleValue : {{ product.saleValue }} </span>

        <input type="button" value="Excluir"
          class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
        <input type="button" value="Editar"
          class="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
      </div>
    </div>

    <div class="py-2 flex justify-center">
      <nav class="block">
        <ul class="flex pl-0 rounded list-none flex-wrap">
          <li>
            <a href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-emerald-500 bg-white text-emerald-500">
              1
            </a>
          </li>
          <li>
            <a href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-emerald-500 bg-white text-emerald-500">
              2
            </a>
          </li>
          <li>
            <a href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-emerald-500 bg-white text-emerald-500">
              3
            </a>
          </li>
          <li>
            <a href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-emerald-500 bg-white text-emerald-500">
              4
            </a>
          </li>
          <li>
            <a href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-emerald-500 bg-white text-emerald-500">
              5
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>