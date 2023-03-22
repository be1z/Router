<script setup lang="ts">
import menuStore from '@/store/menuStore'
import user from '@/store/user'
import utils from '@/utils'
import breadcrumb from '@/components/breadcrumb.vue'
import notification from '@/components/notification.vue'

const userInfo = user().info
//全屏显示
const fullScreen = () => {
  document.documentElement.requestFullscreen()
}
</script>

<template>
  <div class="p-3 bg-white flex justify-between items-center">
    <div class="flex items-center text-2xl">
      <div @click="menuStore().toggleState()">
        <i class="fas fa-square-caret-left mr-4" v-if="menuStore().state"></i>
        <i class="fas fa-square-caret-right mr-4" v-else></i>
      </div>
      <breadcrumb class="hidden md:block" />
    </div>

    <!-- 头像 -->

    <div class="flex items-center justify-center relative cursor-pointer">
      <notification class="mr-6 text-xl" />
      <i class="fab fa-wordpress mr-6 text-xl" @click="fullScreen"></i>
      <div class="group flex items-center justify-center relative py-1 cursor-pointer">
        <img :src="'/images/' + userInfo?.img" class="w-[40px] h-[40px] object-cover rounded-full" alt="" />
        <span class="text-sm ml-3 text-gray-600">{{ userInfo?.name }}</span>
        <section
          class="z-30 group-hover:block absolute translate-y-24 mr-3 bg-white shadow-sm whitespace-nowrap px-3 border rounded-md hidden">
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
  </div>
</template>

<style></style>
