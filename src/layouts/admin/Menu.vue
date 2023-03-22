<script setup lang="ts">
import { ref, watch } from 'vue'
import menuStore from '@/store/menuStore'
import { useRoute, useRouter } from 'vue-router'
import { nextTick } from 'process'
import { IMenu } from '#/menu'
const routerServer = useRouter()
const route = useRoute()
const menus = menuStore()

watch(
  route,
  () => {
    menuStore().setCurrentMenu(route)
  },
  { immediate: true },
)

//重置点击状态
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
// 改变点击状态
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
  <div class="menu w-[200px] bg-gray-800" :class="{ close: menus.state }">
    <div class="logo">
      <i class="fab fa-behance-square text-[30px] text-blue-500"></i>
      <span class="text-md ml-4">beiz的脚手架</span>
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl
        @click="$router.push('/admin')"
        class="py-4"
        :class="{ 'bg-indigo-500 text-white': $route.name == 'admin.home' }">
        <dt class="">
          <section class="flex items-center">
            <i class="mr-2 fas fa-house-user"></i>
            <span>home</span>
          </section>
        </dt>
      </dl>
      <dl v-for="(menu, index) of menus.menus" :key="index" @click="handle(menu)">
        <dt>
          <section>
            <i :class="menu.icon" class="mr-2 mt-5"></i>
            <span>{{ menu.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down duration-300 mt-7" :class="{ 'rotate-180': menu.isClick }"></i>
          </section>
        </dt>
        <dd :class="menu.isClick && !menus.state ? 'block' : 'hidden'">
          <div
            :class="{ active: cmenu.isClick }"
            v-for="(cmenu, index) of menu.children"
            @click="handle(menu, cmenu)"
            :key="index">
            {{ cmenu.title }}
          </div>
        </dd>
      </dl>
    </div>
  </div>
  <div class="bg block md:hidden" v-show="!menus.state" @click="menus.state = true"></div>
</template>

<style lang="scss">
.menu {
  .logo {
    @apply text-gray-300 flex items-center p-3 mt-2;
  }
  .left-container {
    dl {
      @apply px-3 text-gray-300 text-sm relative;
      dt {
        @apply text-[16px] flex justify-between items-center cursor-pointer;
        section {
        }
      }
      dd {
        div {
          @apply py-3 pl-2 my-3  rounded-md cursor-pointer duration-300 hover:bg-indigo-500 bg-gray-700;
          &.active {
            @apply bg-indigo-600  hover:bg-indigo-500;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .menu.close {
    width: auto;
    .logo {
      span {
        @apply hidden;
      }
    }
    .left-container {
      dl {
        @apply mt-2;
        dt {
          section {
            @apply flex justify-center;
            span {
              @apply hidden;
            }
            &:nth-of-type(2) {
              @apply hidden;
            }
          }
        }
        &:hover {
          dd {
            display: block !important;
            @apply absolute left-full w-[200px] z-20 -top-8 bg-gray-700;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .menu {
    @apply h-screen w-[100px] absolute top-0 left-0 z-50;
    &.close {
      @apply hidden;
    }
  }
  .bg {
    @apply w-screen h-screen bg-gray-700 opacity-75 absolute z-10 left-0 top-0;
  }
}
</style>
