<script setup lang="ts">
import Menu from '@/layouts/admin/Menu.vue'
import navbar from '@/layouts/admin/navbar.vue'
import historyLink from '@/layouts/admin/historyLink.vue'
import menuStore from '@/store/menuStore'
import { useRoute } from 'vue-router'
import { onBeforeUpdate } from 'vue'
const route = useRoute()
menuStore().init()

onBeforeUpdate(() => {
  menuStore().addHistoryMenu(route)
})
</script>

<template>
  <div class="admin h-screen grid grid-cols-[auto_1fr]">
    <Menu class="hidden md:block" />
    <div class="content bg-gray-100 grid grid-rows-[auto_1fr]">
      <div>
        <navbar />
        <historyLink />
      </div>
      <div class="m-5 overflow-y-auto relative">
        <router-view #default="{ Component }">
          <Transition
            appear
            class="animate__animated"
            enter-active-class="animate__bounceInRight"
            leave-active-class="animate__bounceOutLeft">
            <component :is="Component" class="absolute w-full" />
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.animate__bounceInRight {
  animation-duration: 0.5;
}
.animate__bounceOutLeft {
  animation-duration: 0.3;
}
</style>

<script lang="ts">
export default {
  //redirect 重定向路由
  route: { meta: { auth: true }, redirect: '/admin/home' },
}
</script>
