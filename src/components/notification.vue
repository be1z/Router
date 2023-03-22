<script setup lang="ts">
import { nextTick } from 'process'
import { ref } from 'vue'

const activeName = ref('first')
const show = ref(false)
nextTick(() => {
  document.documentElement.addEventListener('click', () => {
    show.value = false
  })
})
</script>

<template>
  <div class="notification">
    <i class="fab fa-medapps" @click.stop="show = !show"></i>
    <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
      <el-tab-pane label="系统通知" name="first">
        <a href=""
          >第七德能勤绩我对你叫我去你单位去年的短裤我欠你的那位嫩我去接你能坚持能屈能伸方可王菲王菲王菲呢我放弃哦</a
        ><a href=""
          >第七德能勤绩我对你叫我去你单位去年的短裤我欠你的那位嫩我去接你能坚持能屈能伸方可王菲王菲王菲呢我放弃哦</a
        ><a href=""
          >第七德能勤绩我对你叫我去你单位去年的短裤我欠你的那位嫩我去接你能坚持能屈能伸方可王菲王菲王菲呢我放弃哦</a
        >
      </el-tab-pane>
      <el-tab-pane label="站内消息" name="second">Config</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss">
.notification {
  @apply relative;
  .lists {
    @apply absolute px-3 py-2 border bg-white rounded-md shadow-md right-[-10px] z-20 w-[250px] text-sm;
    a {
      @apply truncate overflow-hidden block border-b pb-2 my-2 hover:text-blue-400;
    }
  }
}
</style>
