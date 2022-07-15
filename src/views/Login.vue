<template>
  <div class="login-box">
    <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
      @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item label="用户名" name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item label="密码" name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>



      <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
        <a-button type="primary" html-type="submit" @click="onSubmit">登录</a-button>
        <a-button type="Default" html-type="cancel" style="margin-left:20px">取消</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import axios from 'axios';

interface FormState {
  username: string;
  password: string;
}
export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      username: '',
      password: '',
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    function onSubmit() {
    axios.post('https://www.fastmock.site/mock/4534ebc5d5d3d93120009d76aaa52be2/api/user/login',{

    }).then((res => {
       if (res.data.code == 200) {
         if ((res.data.data.user == formState.username) && (res.data.data.password == formState.password)) {
         alert("登录成功"); 
         }else {
          alert("用户名或密码错误")
         }
       }
    }))
    }
    return {
      formState,
      onFinish,
      onFinishFailed,
      onSubmit

    };
  },
});
</script>

<style lang="scss">
.login-box {
  width: 350px;
  margin: 120px auto;
  border: 1px solid #DCDFE6;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 30px #DCDFE6;
  display: flex;
  justify-content: center;
}
</style>

