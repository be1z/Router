<script setup lang="ts">
const props = defineProps({
  modelValue: String,
})
</script>

<template>
  <input
    type="text"
    class="hd-input"
    :value="props.modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>

<style lang="scss">
.hd-input {
  @apply w-full outline-none px-2 py-1 border placeholder:text-xs rounded-md focus:ring-2 ring-offset-2 ring-purple-300 duration-200 focus:border-white;
}
</style>
