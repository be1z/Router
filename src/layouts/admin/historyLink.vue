<script setup lang="ts">
import { ref } from 'vue'

const links = ref<{ title: string }[]>([
  { title: '编辑器' },
  { title: '订单列表' },
  { title: '用户列表' },
  { title: '销售总额' },
])
</script>

<template>
  <div class="hidden md:block">
    <div class="grid mx-5 my-3 grid-flow-col gap-3 justify-start">
      <a href="#" class="bg-white rounded-md py-2 text-sm text-gray-600 px-3" v-for="link of links"
        >{{ link.title }} <i class="fas fa-xmark ml-2"></i
      ></a>
    </div>
  </div>
</template>

<style></style>
