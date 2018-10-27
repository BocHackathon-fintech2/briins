import Login from "./components/Login.vue";

import Dashboard from './components/Dashboard.vue';

export default[
    {
        path: '/', component: Login
    },

    {
        path: '/main', component: Dashboard
    }
]