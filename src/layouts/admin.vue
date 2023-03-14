<script setup lang="ts">
import Menu from './admin/Menu.vue'
import navbar from './admin/navbar.vue'
import historyLink from './admin/historyLink.vue'
</script>

<template>
  <div class="admin w-screen h-min-screen flex">
    <Menu class="hidden md:block" />
    <div class="content flex-1 bg-gray-100">
      <navbar />
      <historyLink />
      <div class="m-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
}
</script>
