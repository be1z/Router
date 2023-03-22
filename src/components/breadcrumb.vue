<script setup lang="ts">
import menuStore from '@/store/menuStore'
import { storeToRefs } from 'pinia'

const route = storeToRefs(menuStore()).route
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <template v-if="route">
      <el-breadcrumb-item :to="{ path: r.path }" v-for="(r, index) in route.matched" :key="index"
        >{{ r.meta.menu?.title }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<style></style>
