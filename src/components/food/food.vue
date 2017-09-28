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
				<div class='fooder-assess'>
				  <h3 class='fooder-intro-title'>商品评价</h3>
					<assess v-bind:ratings='food.ratings' v-bind:showType='showType' v-on:change-type='changeType'></assess>
					<ul class='assess-list'>
						<li class='assess-item' v-for='rating in food.ratings' v-show='showType == "all" || showType == rating.rateType'>
							<time class='assess-time'>{{ rating.rateTime }}</time>
							<span class='customer'>{{ rating.username }}<img v-bind:src='rating.avatar' class='assess-avatar' width='20'></span>
							<p class='assess-para'><i v-bind:class="rating.rateType == 'good' ? 'icon-thumb_up' : 'icon-thumb_down' "></i>{{ rating.text }}</p>
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