import User from './components/user/User.vue'
import home from './components/Home.vue'
import UserDetail from './components/User/UserDetail.vue'
import UserEdit from './components/User/UserEdit.vue'
import UserStart from './components/User/UserStart.vue'

export const routes = [
  {path:'/', component: home, name:'home'},
  {path:'/user', component: User, children: [
    {path:'', component: UserStart},
    {path:':id', component: UserDetail},
    {path:':id/edit', component: UserEdit, name:'userEdit'}
  ]},
  { path: '/redirect-me', redirect: {name: 'home'} },
  { path: '*', redirect: '/' }
]