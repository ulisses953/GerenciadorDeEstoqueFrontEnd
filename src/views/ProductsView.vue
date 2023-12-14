<script setup lang="js">
import {ref } from 'vue'

//ref nome.value 
//reactive nome

const products = ref([])

async function getProducts() {
  fetch('http://localhost:8080/api/products')
        .then((response) => {
            return response.json()
        }).then((data) => {
            products.value = data
        }).catch((err) => {
            console.log(err)
        })
}

async function deleteProducts(id) {
  fetch('http://localhost:8080/api/products/'+id,{
    method:"DELETE"
  })
        .then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err)
        })
        getProducts();
}

getProducts();


</script>

<template>
  <h1>Produtos Registrados e suas categorias</h1>
  <div v-for="product in products" class="flex flex-col m-10 bg-[#E0FFFF] p-5"> 

    <span>id: {{ product.id }} </span>
    <span>name : {{ product.name}}</span>
    <span>description : {{product.description}}</span>
    <span>saleValue : {{product.saleValue}}</span>
    <span v-for="category in product.categories">categorias : {{category.name}}</span>
    <input type="button" value="Excluir" @click="deleteProducts(product.id)">
  </div>
</template>