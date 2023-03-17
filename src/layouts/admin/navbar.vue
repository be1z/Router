<script setup lang="ts">
import user from '@/store/user'
import utils from '@/utils'
const userInfo = user().info
</script>

<template>
  <div class="p-3 bg-white flex justify-between items-center">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
      <el-breadcrumb-item> 富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 头像 -->
    <div class="flex items-center justify-center relative py-3 group cursor-pointer">
      <img :src="'/images/' + userInfo?.img" class="w-[40px] h-[40px] object-cover rounded-full" alt="" />
      <span class="text-sm ml-3 text-gray-600">{{ userInfo?.name }}</span>
      <section
        class="group-hover:block absolute translate-y-24 mr-3 bg-white shadow-sm whitespace-nowrap px-3 border rounded-md hidden">
        <div class="flex items-center cursor-pointer py-3 border-b">
          <a class="fas fa-folder-open"></a>
          <span class="text-xs text-gray-600 ml-2">文档资料</span>
        </div>
        <div class="flex items-center cursor-pointer py-3 border-b">
          <i class="fas fa-house-user"></i>
          <span class="text-xs text-gray-600 ml-2">用户管理</span>
        </div>
        <div class="flex items-center cursor-pointer mb-3 py-3 border-b" @click="utils.user.logout()">
          <i class="fas fa-left-long"> </i>
          <span class="text-xs text-gray-600 ml-2">退出登录</span>
        </div>
      </section>
    </div>
  </div>
</template>

<style></style>
