<script setup lang="ts">
import {reactive} from 'vue'
const lista = reactive({
  data: [
    {name: "produto1", value: 10}, {name: "produto2", value: 20}, {name: "produto3", value: 20}
  ]
})
</script>

<template>
  <main>
    <div class="w-full h-full bg-black flex justify-center itens-center flex-col ">
      <h1 v-for="Iten in lista.data" class="text-[red] text-center">O {{Iten.name}}, tem valor de R$ {{Iten.value}}</h1>
      


    </div>
    
  </main>
</template>
