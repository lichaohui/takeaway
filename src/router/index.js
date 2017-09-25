import Vue from 'vue'
// 引入vue-router组件
import Router from 'vue-router'
// 引入一些组件
import Good from '@/components/good/good.vue'
import Businessmen from '@/components/businessmen/businessmen.vue'
import Comment from '@/components/comment/comment.vue'
import Food from '@/components/food/food.vue'

Vue.use(Router)

// 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
	{ path: '/', component: Good },
  { path: '/good', component: Good },
  { path: '/businessmen', component: Businessmen },
	{ path: '/comment', component: Comment },
	{ path: '/food', component: Food },
	{path: '/data'}
]

// 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default new Router({
	// （缩写）相当于 routes: routes
  routes
})
