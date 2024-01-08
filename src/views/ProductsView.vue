<script setup lang="ts">
import { ref, reactive, onMounted, type Ref } from 'vue';
import ProductExcludePut from '../components/ProductExcludePut.vue';

let formulario: Ref<boolean> = ref(false);

function criarFormulario() {
  formulario.value = !formulario.value;
}

function postProduct(){

}
</script>


<template>
  <div class="flex flex-col items-center m-2 border w-screen">
    <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-blueGray-800 ">Produtos</h1>
    <button @click="criarFormulario()">adicionar/verPro</button>
    <div v-if="formulario == true">
      
      
      
    </div>
    <ProductExcludePut v-else />
  </div>
</template>