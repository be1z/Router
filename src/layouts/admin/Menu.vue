<script setup lang="ts">
import { ref } from 'vue'
import { routerStore } from '@/store/router'
import { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'
import { nextTick } from 'process'
const router = routerStore()

const reset = () => {
  router.routes.forEach((route) => {
    route.meta.isClick = false
    route.children.forEach((route) => {
      if (route.meta) {
        route.meta.isClick = false
      }
    })
  })
}
const handle = (pRoute: RouteRecordNormalized, cRoute?: RouteRecordRaw) => {
  reset()
  pRoute.meta.isClick = true
  nextTick(() => {
    cRoute!.meta!.isClick = true
    
  })
}
</script>

<template>
  <div class="menu w-[200px] bg-gray-800 p-3">
    <div class="logo text-gray-300 flex items-center mt-2">
      <i class="fab fa-behance-square text-[30px] text-blue-500"></i>
      <span class="text-md ml-4">beiz的脚手架</span>
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl v-for="(route, index) of router.routes" :key="index" @click="handle(route)">
        <dt>
          <section>
            <i :class="route.meta.icon" class="mr-2 mt-6"></i>
            <span>{{ route.meta.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down duration-300 mt-7" :class="{ 'rotate-180': route.meta.isClick }"></i>
          </section>
        </dt>
        <dd
          v-show="route.meta.isClick"
          :class="{ active: croute.meta!.isClick }"
          v-for="(croute, index) of route.children"
          @click="handle(route, croute)"
          :key="index">
          {{ croute.meta!.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss">
.admin {
  .left-container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-[16px] flex justify-between items-center cursor-pointer;
        section {
        }
      }
      dd {
        @apply py-3 pl-2 my-3  rounded-md cursor-pointer duration-300 hover:bg-indigo-500 bg-gray-700;
        &.active {
          @apply bg-indigo-600  hover:bg-indigo-500;
        }
      }
    }
  }
}
</style>
