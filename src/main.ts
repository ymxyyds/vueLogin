import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
const app = createApp(App)
app.use(router)
app.use(Antd)
app.config.globalProperties.$http = axios
app.mount('#app')
