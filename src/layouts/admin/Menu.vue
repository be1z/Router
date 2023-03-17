<script setup lang="ts">
import { ref } from 'vue'
import menuStore from '@/store/menuStore'

import { RouteRecordNormalized, RouteRecordRaw, useRouter } from 'vue-router'
import { nextTick } from 'process'
import { IMenu } from '#/menu'
const routerServer = useRouter()
const menus = menuStore()

const reset = () => {
  menus.menus.forEach((menu) => {
    menu.isClick = false
    menu.children?.forEach((cmenu) => {
      if (cmenu) {
        cmenu.isClick = false
      }
    })
  })
}
const handle = (pMenu: IMenu, cMenu?: IMenu) => {
  reset()
  pMenu.isClick = true
  if (cMenu) {
    nextTick(() => {
      cMenu.isClick = true
      routerServer.push(cMenu.route!)
    })
  }
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
      <dl v-for="(menu, index) of menus.menus" :key="index" @click="handle(menu)">
        <dt>
          <section>
            <i :class="menu.icon" class="mr-2 mt-6"></i>
            <span>{{ menu.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down duration-300 mt-7" :class="{ 'rotate-180': menu.isClick }"></i>
          </section>
        </dt>
        <dd
          v-show="menu.isClick"
          :class="{ active: cmenu.isClick }"
          v-for="(cmenu, index) of menu.children"
          @click="handle(menu, cmenu)"
          :key="index">
          {{ cmenu.title }}
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
