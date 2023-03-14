<script setup lang="ts">
import { nextTick } from 'process'
import { ref } from 'vue'
import { echarts1, echarts2 } from './ecahrs'
interface cardsType {
  title: string
  price: number
  icon: string
  iconColor: string
  totalTitle: string
  total: number
}
const cards = ref<cardsType[]>([
  {
    title: '总人数',
    price: 29312,
    icon: 'fab fa-canadian-maple-leaf',
    iconColor: 'text-orange-500',
    totalTitle: '总评论数',
    total: 312123,
  },
  {
    title: '销售额',
    price: 12312,
    icon: 'fab fa-algolia',
    iconColor: 'text-green-600',
    totalTitle: '总销售数',
    total: 3122123,
  },
  {
    title: '订单数',
    price: 19312,
    icon: 'fab fa-earlybirds',
    iconColor: 'text-blue-500',
    totalTitle: '总订单数',
    total: 2312123,
  },
  {
    title: '评论数',
    price: 39312,
    icon: 'fab fa-empire',
    iconColor: 'text-red-500',
    totalTitle: '总评论数',
    total: 32312123,
  },
])

nextTick(() => {
  // 绘制图表
  echarts.init(document.getElementById('echart1')).setOption(echarts1)
  echarts.init(document.getElementById('echart2')).setOption(echarts2)
})
</script>

<template>
  <div class="grid md:grid-cols-4 gap-3 bg-white p-3">
    <el-card
      shadow="hover"
      v-for="(card, index) of cards"
      :key="index"
      :body-style="{ padding: '20px' }"
      class="cursor-pointer">
      <template #header>
        <div class="flex justify-between items-center">
          <span>{{ card.title }}</span>
          <el-tag type="danger" size="mini" effect="dark">月</el-tag>
        </div>
      </template>
      <section class="flex justify-between items-center">
        <span class="text-2xl"> ${{ card.price }} </span>
        <i :class="[card.icon, card.iconColor]" class="text-4xl"></i>
      </section>
      <section class="text-base mt-4 flex justify-between items-center">
        <span> {{ card.totalTitle }}</span>
        <span>{{ card.total }}人</span>
      </section>
    </el-card>
  </div>
  <div class="mt-5 grid md:grid-cols-2 gap-3 p-3">
    <el-card shadow="hover" :body-style="{ padding: '20px' }">
      <template #header>
        <div>
          <span>用户统计</span>
        </div>
      </template>
      <section id="echart1" class="h-72 w-full md:w-[600px]"></section>
    </el-card>
    <el-card shadow="hover" :body-style="{ padding: '20px' }">
      <template #header>
        <div>
          <span>销售额</span>
        </div>
      </template>
      <section id="echart2" class="h-72 w-full md:w-[600px]"></section>
    </el-card>
  </div>
</template>

<style></style>
