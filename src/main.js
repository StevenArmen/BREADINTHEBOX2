import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


import App from './App'
import axios from "axios"


import myRouter from "./Routes"
import store from "./store"
axios.defaults.baseURL = "http://localhost:5000/"
const myApp = createApp(App);
myApp.use(myRouter);
myApp.use(store);

myApp.mount('#app');
