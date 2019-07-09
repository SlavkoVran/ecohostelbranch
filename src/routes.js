// import ForgotPass from './components/User/ForgotPass.vue'
// import ForgotPass2 from './components/User/ForgotPass2.vue'
// import Home from './components/Home.vue'
// import UserList from './components/User/UserList.vue'
// import Login from './components/User/Login.vue'
// import Register from './components/User/Register.vue'
// import RegistrationSuccess from './components/User/RegistrationSuccess.vue'
// import Messages from './components/User/Messages.vue'
// import Dashboard from './components/User/Dashboard.vue'

import Home from './components/Home.vue'
import Blog from './views/Blog'
// import Landing from '.components/Landing.vue'


export const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '/events',
        component: Blog
    }
    
//     {
//         path: '', 
//         component: Home
//     },
//     {
//         path: '/ForgotPass', 
//         component: ForgotPass
//     },
//     {
//         path: '/ForgotPass2',
//         component: ForgotPass2
//     },
 
//     {
//         path: '/Login',
//         component: Login
//     },
//     {
//         path: '/Register',
//         component: Register
//     },
//     {
//         path: '/RegistrationSuccess',
//         component: RegistrationSuccess
//     },
    
//     {
//     path: '/Users',
//     component: Dashboard,
//     children: [
//         {
// path: '', component: UserList
//         },
//         {
//             path:'/Messages', component: Messages
//         }
//     ]
//     }
];