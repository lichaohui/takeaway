<template>
  <main class='main'>
    <aside class='side-nav' ref="sidenav">
		  <ul class='side-navbar'>
			  <li v-for='(good , index) in goods' class='side-navbar-item' v-bind:class="[good.type, {'cur':index == currentIndex }]" v-on:click='choseGood(index)'>
				  {{ good.name }}
				</li>
			</ul>
	  </aside>
		<div class='goods-wrapper' ref="goods">
			<ul class='goods'>
				<li class='good' v-for='(good , goodIndex) in goods'>
					<h3 class='good-name'>{{ good.name }}</h3>
					<ul class='foods'>
						<li v-for='(food , foodIndex) in good.foods' class='food'>
						  <router-link v-bind:to="{ path: '/food', query: { goodIndex: goodIndex, foodIndex: foodIndex }}" >
								<img v-bind:src='food.icon' class='food-icon' width='57' height='57'>
							</router-link>	
							<section class='food-detail'>
								<h4 class='food-name' v-on:click='goFood(food)'>{{ food.name }}</h4>
								<p class='food-description'>{{ food.description }}</p>
								<dl class='food-info'>
									<dt>月售</dt>
									<dd>{{ food.sellCount }}份</dd>
								</dl>
								<dl class='food-info'>
									<dt>好评率</dt>
									<dd>{{ food.rating }}%</dd>
								</dl>
								<p class='price-area'>
									<em class='price'>￥{{ food.price }}</em>
									<em class='old-price' v-if='food.oldPrice'>{{ food.oldPrice }}</em>
								</p>
								<carbutton v-bind:food="food" v-bind:tpl='tpl'></carbutton>
							</section>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<shopcar v-bind:businessmen="businessmen" v-bind:selectedFoods='calFoods'></shopcar>
	</main>
</template>

<style lang='stylus'>
 @import '../common/mixin.styl'
 @import './good.styl'
</style>

<script src='./good.js'></script>