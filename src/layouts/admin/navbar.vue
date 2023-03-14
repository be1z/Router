<script setup lang="ts"></script>

<template>
  <div class="p-3 bg-white flex justify-between items-center">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
      <el-breadcrumb-item> 富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 头像 -->
    <div class="flex items-center justify-center relative group cursor-pointer">
      <img src="/images/title.jpg" class="w-[40px] h-[40px] object-cover rounded-full" alt="" />
      <span class="text-sm ml-3 text-gray-600">bzi</span>
      <section
        class="group-hover:block absolute translate-y-24 mr-3 bg-white shadow-sm whitespace-nowrap px-3 border rounded-md hidden">
        <div class="flex items-center cursor-pointer py-3 border-b">
          <a class="fa fa-angle-down"></a>
          <span class="text-xs text-gray-600 ml-2">网站首页</span>
        </div>
        <div class="flex items-center cursor-pointer py-3 border-b">
          <a class="fa fa-angle-down"></a>
          <span class="text-xs text-gray-600 ml-2">用户管理</span>
        </div>
        <div class="flex items-center cursor-pointer mb-3 py-3 border-b">
          <a class="fa fa-angle-down"></a>
          <span class="text-xs text-gray-600 ml-2">会员中心</span>
        </div>
      </section>
    </div>
  </div>
</template>

<style></style>
