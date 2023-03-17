<script setup lang="ts">
import v from '@/plugins/vaildate/index'
import utils from '@/utils'
import { Ilogin } from '@/apis/userApi'

const schema = {
  account: { required: true, email: true },
  password: { required: true, min: 3 },
}
const { Form, Field, ErrorMessage } = v

const onSubmit = async (schema: any) => {
  await utils.user.login(schema)
}
</script>

<script lang="ts">
export default {
  route: { name: 'login', meta: { guest: true } },
}
</script>

<template>
  <Form
    @submit="onSubmit"
    class="bg-blue-400 h-screen flex justify-center items-center p-5 md:p-0"
    :validation-schema="schema">
    <div class="w-[720px] bg-white text-dark-500 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6 text-lg flex flex-col justify-between">
        <div>
          <div>
            <h2 class="text-lg text-center">会员登录</h2>
            <div class="mt-8">
              <Field name="account" label="账号" placeholder="请输入账号或者用户名" class="hd-input" />
              <ErrorMessage name="account" class="hd-error" />
              <Field class="mt-6 hd-input" label="密码" name="password" type="password" placeholder="请输入密码" />
              <ErrorMessage name="password" class="hd-error" />
              <hdButton class="w-full" />

              <div class="flex justify-center items-center">
                <i class="fa-brands fa-weixin bg-green-500 rounded-full mt-3 text-white p-2"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-3 justify-center mt-7">
          <hdLink />
          <a class="text-xs text-gray-700">会员注册</a>
          <a class="text-xs text-gray-700">找回密码</a>
          <a class="text-xs text-gray-700">网站首页</a>
        </div>
      </div>

      <div class="hidden md:block">
        <img src="/images/login.jpg" class="h-96 w-full" />
      </div>
    </div>
  </Form>
</template>

<style lang="scss"></style>
