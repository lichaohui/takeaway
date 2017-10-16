<template>
  <div id="app">
	  <v-header v-bind:businessmen='businessmen'></v-header>
		<nav class='nav border-xs'>
		  <ul class='navbar'>
			  <li class='navbar-item'>
				  <router-link to="/good">商品</router-link>
				</li>
			  <li class='navbar-item'>
				  <router-link to="/businessmen">商家</router-link>
				</li>
				<li class='navbar-item'>
				  <router-link to="/comment">评论</router-link>
				</li>
			</ul>
		</nav>
		<!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
		<keep-alive>
      <router-view v-bind:businessmen="businessmen"></router-view>
		</keep-alive>
  </div>
</template>

<script>
 import header from './components/header/header.vue'
 import {getRequest} from '../static/js/getRequest.js'
 export default {
   data () {
	   return {
		   businessmen: {
			   id: (() => {
				   let queryParam = getRequest()
					 return queryParam.id
				 })()
			 }
		 }
	 },
	 /*
	  * 每个 Vue 实例在被创建之前都要经过一系列的初始化过程。例如需要设置数据监听、编
		* 译模板、挂载实例到 DOM、在数据变化时更新 DOM 等。同时在这个过程中也会运行一些* 叫做生命周期钩子的函数，给予用户机会在一些特定的场景下添加他们自己的代码。
    *
		* 比如 created 钩子可以用来在一个实例被创建之后执行代码：
	  */
	 created () {
	   /*
		  * 通过vue-resource这个插件发送ajax请求
			* /api/seller是后端路由
			*/
	   this.$http.get(`/api/seller?id=${this.businessmen.id}`).then((res) => {
		   if (res.body.isSuccess) {
			   /*
				  * 如果请求成功并且返回数据成功
					* 则把返回的数据赋值给当前实例的businessmen属性
					*/
				 this.businessmen = Object.assign({}, this.businessmen, res.body.data)
			 } else {
			   // 如果请求成功但并没有返回对应数据则提示返回的信息
			   alert(res.body.message)
			 }
		 }, (res) => {
		   // 如果请求失败则提示失败信息
		   alert(res.statusText)
		 })
	 },
   components: {
	   'v-header': header
	 }
 }
</script>

<style lang='stylus'>
 @import './components/common/index.styl'
 
 .navbar	
   display: flex
	  width: 100%
	  height: 34px
	  line-height: 34px
		 text-align: center
		 borders(solid,#ccc,1px)
		 	 
 .navbar-item	
	 flex: 1
	
 .navbar-item a
	 display: block
	 font-size: 14px
	 color: rgb(77,85,93)
	 
 .navbar-item a.router-link-active
   color: #f54100	  
</style>