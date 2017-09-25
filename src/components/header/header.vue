<template>
  <header class='header'>
	  <div class='businessmen'>
		  <img width='64' height='64' v-bind:src='businessmen.avatar' class='avatar'>
			<section class='businessmen-detail'>
			  <h2 class='businessmen-title'>{{ businessmen.name }}</h2>
				<p class='description'>{{ businessmen.description }}/{{ businessmen.deliveryTime }}分钟送达</p>
				<p class='support' v-bind:class='businessmen.supports[0].type' v-if='businessmen.supports'>{{ businessmen.supports[0].description }}</p>
			</section>
			<span v-if='businessmen.supports' v-on:click='showLayer' class='support-count'>{{ businessmen.supports.length }}个<i class='icon-keyboard_arrow_right'></i></span>
		</div>
		<p class='bulletin' v-on:click='showLayer'>{{ businessmen.bulletin }}<i class='icon-keyboard_arrow_right'></i></p>
		<div class='layer' v-show='isLayerShow'>
		  <h2 class='layer-businessmen-title'>{{ businessmen.name }}</h2>
			<v-star v-bind:size='48' v-bind:score='businessmen.score'></v-star>
			<div class='layer-section-head'>
			  <span class='line'></span>
				<h3>优惠信息</h3>
				<span class='line'></span>
			</div>
			<ul class='offers' v-if='businessmen.supports'>
			  <li class='support' v-for='support in businessmen.supports' v-bind:class='support.type'>{{ support.description }}</li>
			</ul>
			<div class='layer-section-head'>
			  <span class='line'></span>
				<h3>商家公告</h3>
				<span class='line'></span>
			</div>
			<p class='bulletin-para'>{{ businessmen.bulletin }}</p>
		  <button type='button' class='close' title='关闭' v-on:click='closeLayer'>X</button>
		</div>
	</header>
</template>

<style lang='stylus'>
 @import '../common/mixin.styl'
 @import './header.styl'
</style>

<script src='./header.js'></script>