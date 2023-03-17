<script setup lang="ts">
import menuStore from '@/store/menuStore'
const menus = menuStore()
</script>

<template>
  <div class="hidden md:block bg-white p-3 border-t border-b" v-show="menus.historyMenu.length">
    <div class="grid grid-flow-col gap-3 justify-start">
      <div
        class="bg-white border cursor-pointer rounded-sm shadow-sm hover:bg-blue-600 hover:text-white duration-300 py-2 text-sm text-gray-600 px-3"
        v-for="item of menus.historyMenu"
        :class="{ 'bg-blue-600 text-white': $route.name == item.route }">
        <router-link :to="{ name: item.route }"> {{ item.title }}</router-link>
        <i class="fas fa-xmark ml-2 hover:text-yellow-300" @click="menus.removeHistory(item)"></i>
      </div>
    </div>
  </div>
</template>

<style></style>
