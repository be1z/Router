<script setup lang="ts">
import { ref } from 'vue'

interface IMenuItem {
  title: string
  icon?: string
  active?: boolean
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}

const menu = ref<IMenu[]>([
  {
    title: '错误页面',
    icon: 'fab fa-adversal ',
    active: true,
    children: [{ title: '404页面', active: true }, { title: '403页面' }, { title: '500页面' }],
  },
  {
    title: '编辑器',
    active: false,
    icon: 'fab fa-app-store-ios ',
    children: [{ title: 'markdown编辑器' }, { title: '富文本编辑器' }],
  },
  {
    title: '错误页面',
    icon: 'fab fa-adversal ',
    active: true,
    children: [{ title: '404页面', active: true }, { title: '403页面' }, { title: '500页面' }],
  },
])

const resetMenu = () => {
  menu.value.forEach((item) => {
    item.active = false
    item.children?.forEach((element) => (element.active = false))
  })
}
const handle = (pMenu: IMenu, cMenu?: IMenu) => {
  resetMenu()
  pMenu.active = true
  console.log(pMenu.active)
}
</script>

<template>
  <div class="menu w-[200px] bg-gray-800 p-3">
    <div class="logo text-gray-300 flex items-center mt-2">
      <i class="fab fa-behance-square text-[30px] text-blue-500"></i>
      <span class="text-md ml-4">beiz的脚手架</span>
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl v-for="(item, index) of menu" :key="index" @click="handle(item)">
        <dt>
          <section>
            <i :class="item.icon" class="mr-2 mt-6"></i>
            <span>{{ item.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down duration-300 mt-7" :class="{ 'rotate-180': item.active }"></i>
          </section>
        </dt>
        <dd v-show="item.active" :class="{ active: cmenu.active }" v-for="(cmenu, index) of item.children" :key="index">
          {{ cmenu.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss">
.admin {
  .left-container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-[16px] flex justify-between items-center cursor-pointer;
        section {
        }
      }
      dd {
        @apply py-3 pl-2 my-3  rounded-md cursor-pointer duration-300 hover:bg-indigo-500 bg-gray-700;
        &.active {
          @apply bg-indigo-600 hover:bg-indigo-500;
        }
      }
    }
  }
}
</style>
