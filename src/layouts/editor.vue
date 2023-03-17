<script setup lang="ts"></script>
<script lang="ts">
export default {
  route: {
    meta: { menu: { icon: 'fab fa-avianex', title: '编辑器' }, auth: true },
    component: () => import('@/layouts/admin.vue'),
  },
}
</script>
<template>
  <div>编辑器</div>
  <router-view></router-view>
</template>

<style></style>
