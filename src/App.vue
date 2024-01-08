<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { createApp,onMounted  } from 'vue'
import SideBar from './components/SideBar.vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})

</script>

<template>
  <div class="flex">
    <SideBar/>
    <RouterView/>
  </div>

</template>

