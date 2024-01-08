<script setup lang="ts">
import { ref, type Ref } from 'vue'
import createCategory from '../components/CategoryCreate.vue'
import CategoryCRUD from '../components/CategoryCRUD.vue';

let formulario: Ref<Boolean> = ref(false);

function mudarFormulario() {
    formulario.value = !formulario.value;
}

</script>

<template>
    <div class="w-32 h-32 bg-amber-500 hover:bg-amber-400 m-14 rounded flex justify-center" data-modal-target="crudCategory"
        data-modal-toggle="crudCategory">
        <button class="text-white">Categorias</button>
    </div>

    <!-- modal category -->
    <div class="bg-white hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        id="crudCategory" data-modal-backdrop="static" aria-hidden="true">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <CategoryCRUD/>

            <button class="flex bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" data-modal-hide="crudCategory" type="button">
                sair
            </button>
        </div>


        
    </div>
</template>