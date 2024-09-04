import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'

import LoginScreen from './components/LoginScreen.vue'
import SignupScreen from './components/SignupScreen.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import UpdatePassword from './components/UpdatePassword.vue';
import VideoScreen from './components/VideoScreen.vue';
import ReelScreen from './components/ReelScreen.vue';
import NoDataAvailable from './components/NoDataAvailable.vue';
import VideoTableUsingDiv from './components/VideoTableUsingDiv.vue';
import ChannelSearch from './components/ChannelSearch.vue';
import { createRouter ,createWebHistory } from 'vue-router'
const router = createRouter({
history : createWebHistory(),
routes:[
{path:'/' ,  component:LoginScreen},
{path:'/LoginScreen', component:LoginScreen},
{path:'/SignupScreen', component:SignupScreen},
{path:'/ForgotPassword',component:ForgotPassword},
{path:'/UpdatePassword',component:UpdatePassword},
{path:'/VideoScreen',component:VideoScreen},
{path:'/ReelScreen',component:ReelScreen},
{path:'/VideoTableUsingDiv',component:VideoTableUsingDiv},
{path:'/NoDataAvailable',component:NoDataAvailable},
{path:'/ChannelSearch',component:ChannelSearch},
]});
createApp(App).use(router).mount('#app')
