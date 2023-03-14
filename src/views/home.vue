<script setup lang="ts"></script>
<script lang="ts">
export default {
  route: { name: 'home' },
}
</script>

<template>
  <div class="w-screen h-screen bg-blue-400 flex justify-center items-center flex-col">
    <img src="/images/title.jpg" alt="" class="w-40 h-40 rounded-full object-cover border-4 mb-3" />
    <div>
      <router-link :to="{ name: 'admin.home' }" class="hd-button px-2">后台管理</router-link>
      <router-link :to="{ name: 'login' }" class="hd-button px-2 ml-2 danger">用户登陆</router-link>
    </div>

    <p class="text-gray-200 mt-4 text-xl drop-shadow-lg">bzi的前台脚手架</p>
  </div>
</template>

<style></style>
