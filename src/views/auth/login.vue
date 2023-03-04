<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  password: '',
})
</script>

<template>
  <div class="bg-blue-400 h-screen flex justify-center items-center p-5 md:p-0">
    <div class="w-[720px] bg-white text-dark-500 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6 text-lg">
        <h2 class="text-lg text-center">会员登录</h2>
        <div class="mt-8">
          <hdInput placeholder="请输入账号或者用户名" v-model="form.name" />
          <hdInput class="mt-6" placeholder="请输入密码" v-model="form.password" />
          <hdButton />

          <div class="flex gap-3 justify-center mt-7">
            <hdLink />
            <a class="text-xs text-gray-700">会员注册</a>
            <a class="text-xs text-gray-700">找回密码</a>
            <a class="text-xs text-gray-700">网站首页</a>
          </div>
        </div>
      </div>
      <div class="hidden md:block">
        <img src="/images/login.jpg" class="h-96 w-full" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
