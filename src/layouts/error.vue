<script setup lang="ts"></script>
<script lang="ts">
export default {
  route: {
    meta: { menu: { icon: 'fab fa-avianex', title: '错误页面' }, auth: true },
    component: () => import('@/layouts/admin.vue'),
  },
}
</script>
<template>
  <router-view></router-view>
</template>

<style></style>
