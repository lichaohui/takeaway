<template>
  <transition name='fooder'> 
	  <div class='fooder' ref='foodArea'>
			<div class='fooder-content'>
				<header class='fooder-header'>
				  <i class='back icon-arrow_lift' title='返回' v-on:click='back()'></i>
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
					<button type='button' class='joincar'>加入购物车</button>
				</header>
				<div class='fooder-intro'>
					<h3 class='fooder-intro-title'>商品介绍</h3>
					<p class='fooder-intro-para'>{{ food.info }}</p>
				</div>
				<div class='fooder-assess'>
					<h3 class='fooder-intro-title'>商品评价</h3>
					<ul class='fooder-assess-types'>
						<li class='fooder-assess-type'>
							<button type='button' class='chosetype chosetype-selected'>全部 {{}}</button>
						</li>
						<li class='fooder-assess-type'>
							<button type='button' class='chosetype'>推荐 {{}}</button>
						</li>
						<li class='fooder-assess-type'>
							<button type='button' class='chosetype'>吐槽 {{}}</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</transition> 
</template>

<style lang='stylus'>
@import '../common/icon.styl'
@import './food.styl'
</style>

<script src='./food.js'></script>