<template>
  <transition name='fooder'> 
	  <div class='fooder' ref='foodArea'>
			<div class='fooder-content'>
				<header class='fooder-header'>
				  <i class='back icon-arrow_lift' title='返回' v-on:click='hideFooder()'></i>
					<img v-bind:src='food.image' width='100%' class='fooder-image'>
					<section class='fooder-info-left'>
						<h2 class='fooder-name'>{{ food.name }}</h2>
						<p class='fooder-info-sale'>
							<span>月售{{ food.sellCount }}份</span>
							<span>好评率{{ food.rating }}%</span>
						</p>
						<p class='fooder-price'>
							<span class='fooder-price-now'>￥{{ food.price }}</span>
							<span class='fooder-price-old' v-if='food.oldPrice'>{{ food.oldPrice }}</span>
						</p>
					</section>
					<button type='button' v-show='food.count == 0' class='joincar' v-on:click='food.count += 1'>加入购物车</button>
					<carbutton v-bind:food="food" v-bind:tpl='tpl' v-show='food.count > 0' class='joincared'></carbutton>
				</header>
				<div class='fooder-intro'>
					<h3 class='fooder-intro-title'>商品介绍</h3>
					<p class='fooder-intro-para'>{{ food.info }}</p>
				</div>
				<assess></assess>
			</div>
		</div>
	</transition> 
</template>

<style lang='stylus'>
@import '../common/icon.styl'
@import './food.styl'
</style>

<script src='./food.js'></script>