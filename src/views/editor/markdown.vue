<script setup lang="ts">
import editor from '@/components/markdown/editor.vue'
</script>

<template>
  <div>
    <editor />
  </div>
</template>

<style></style>

<script lang="ts">
export default {
  route: { meta: { menu: { icon: 'fab fa-avianex', title: 'markdown编辑器' }, permission: 'editor_markdown' } },
}
</script>
