<template>
  <button @click="replaceSideBar()" v-if="sideBar == true"
    class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-3 border-b-4 border-gray-700 hover:border-gray-500 rounded fixed">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
    </svg>
  </button>

  <div v-else>
    <aside class="w-64 h-screen bg-gray-800 text-whitec flex justify-between flex-col">
      <div class="w-full">
        <div class="p-4 bg-gray-700">
          <h2 class="text-2xl font-bold text-white">Minha Sidebar</h2>
        </div>
        <ul>
          <li class="p-4 hover:bg-gray-700">
            <i class="fas fa-home mr-2"></i>
            <a href="/" class="text-white">Home</a>
          </li>
          <li class="p-4 hover:bg-gray-700">
            <i class="fas fa-cogs mr-2"></i>
            <a href="/category" class="text-white">Categoria</a>
          </li>
          <li class="p-4 hover:bg-gray-700">
            <i class="fas fa-cogs mr-2"></i>
            <a href="/products" class="text-white">Produtos</a>
          </li>
          <li class="p-4 hover:bg-gray-700">
            <i class="fas fa-cogs mr-2"></i>
            <a href="/products" class="text-white">Estoques</a>
          </li>
          <li class="p-4 hover:bg-gray-700">
            <i class="fas fa-cogs mr-2"></i>
            <a href="/products" class="text-white">Usuarios</a>
          </li>
        </ul>
      </div>

      <div class="bg-gray-800 text-white justify-start w-50px h-50px m-3">
        <button @click="replaceSideBar()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

          


        </button>
      </div>

    </aside>
  </div>
</template>




<script setup lang="ts">
import { type Ref, ref } from 'vue';


let sideBar: Ref<boolean> = ref(true);

function replaceSideBar() {
  sideBar.value = !sideBar.value;
}


</script>


