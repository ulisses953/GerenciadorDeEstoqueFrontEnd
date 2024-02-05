<script setup lang="ts">
import type { Category } from '../types/Category';
import { getProducts, postProducts, deleteProducts } from '../stores/Products';
import type { Product } from '../types/Products';
import { type Ref, ref, reactive, onMounted } from 'vue';
import { getCategory } from '../stores/Category';

let listProduct: Ref<Product[]> = ref([]);
let listCategory: Ref<Category[]> = ref([]);
let createOrGet: Ref<boolean> = ref(true);
let categorySelect: Ref<String> = ref("");

let form: Product = reactive<Product>({
  id: '',
  name: '',
  description: '',
  minimumQuantity: 0,
  saleValue: 0,
  categories: [{
    id: '',
    name: '',
    description: '',
  }]
});



async function formPost(product: Product) {
  console.log(product);

  await postProducts(product);

  listProduct.value = await getProducts();

  formClear();
}

function formClear() {
  form.id = '';
  form.name = '';
  form.description = '';
  form.minimumQuantity = 0;
  form.saleValue = 0;
  form.categories = [];
}
onMounted(async () => {
  listProduct.value = await getProducts();
  listCategory.value = await getCategory();
  form.categories!.shift();
});

function selectChange(id: String) {
  console.log(id);

  let selectCateory: Category = listCategory.value.filter(item => item.id == id)[0];

  form.categories?.push(selectCateory);

}

function selectDelete(id: String) {
  form.categories = form.categories?.filter(c => c.id != id);
}

async function formDelete(id: String) {
  await deleteProducts(id);

  listProduct.value = await getProducts();
}



</script>


<template>
  <div>
    <button
      class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 m-2"
      @click="createOrGet = !createOrGet">adicionar / Produtos</button>

    <div v-if="createOrGet == false">
      <div class="p-2">
        <label>Name : </label>
        <input v-model="form.name" type="text" class="ml-2">
      </div>
      <div class="p-2">
        <label>Descrisao :</label>
        <input v-model="form.description" type="text" class="ml-2">
      </div>
      <div class="p-2">
        <label>Quantidade minima :</label>
        <input v-model="form.minimumQuantity" type="text" class="ml-2">
      </div>
      <div class="p-2">
        <label>Valor de venda:</label>
        <input v-model="form.saleValue" type="text" class="ml-2">
      </div>
      <div>
        <div class="p-2">
          <label>Categoia:</label>

          <select class="ml-2" v-model="categorySelect" @change="selectChange(categorySelect)">
            <option v-for="category in listCategory" :value="category.id"> {{ category.name }}</option>
          </select>

          <div v-for="catagory2 in form.categories" class="flex flex-nowrap">
            <p class="m-1">{{ catagory2.name }}</p>
            <button class="m-1" @click="selectDelete(catagory2.id!)">Excluir</button>
          </div>


        </div>
      </div>

      <button
        class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="formPost(form)">Salvar</button>
    </div>
    <div v-else v-for="product in listProduct" class="m-2 flex rounded-lg border-2 border-black w-[500px]">
      <div class="flex flex-col justify-center itens-center text-xl">
        <div class="p-2">
          <span>id: {{ product.id }}</span>
        </div>

        <div class="p-2">
          <span>name : </span>
          <input type="text" :disabled="'true'" :value="product.name">
        </div>

        <div class="p-2">
          <span>description : </span>
          <input type="text" :disabled="'true'" :value="product.description">
        </div>

        <div class="p-2">
          <span>Quantidade Minima : </span>
          <input type="text" :disabled="'true'" :value="product.minimumQuantity">
        </div>

        <div class="p-2">
          <span>Valor de Compra : </span>
          <input type="text" :disabled="'true'" :value="product.saleValue">
        </div>

        <div class="p-2">
          <span class="">Categorias : </span>
          <div v-for="category in product.categories" class="flex flex-row">
            <div class="px-5 bg-gray-500 text-white border-black rounded-full text-center ">{{ category.name }}</div>
          </div>

          <div>
            <button
              class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none m-1 ease-linear transition-all duration-150"
              @click="formDelete(product.id!)">Excluir</button>
            <button
              class="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none m-1 ease-linear transition-all duration-150"
              @click="">Editar</button>
          </div>



        </div>
      </div>
    </div>
  </div>
</template>