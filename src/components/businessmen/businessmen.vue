<template>
  <main class='main main-businessmen' ref="mainer">
	  <div class='businessmen-info'>
		  <div class='businessmen-info-top'>
			  <section class='businessmen-info-name-star'>
				  <h3 class='businessmen-info-name'>{{ businessmen.name }}</h3>
					<star v-bind:size='36' v-bind:score='businessmen.score'></star>
					<em class='rating-count'>({{ businessmen.ratingCount }})</em>
					<em class='sell-count'>月售{{ businessmen.sellCount }}单</em>
				</section>
				<section class='collect-area'>
				  <i class='collect collect-after icon-favorite'></i>
					已收藏
				</section>
			</div>
			<div class='businessmen-info-others'>
			  <dl class='businessmen-info-other'>
				  <dt>起送价</dt>
					<dd>
					  <em>{{ businessmen.minPrice }}</em>元
					</dd>
				</dl>
				<dl class='businessmen-info-other'>
				  <dt>商家配送</dt>
					<dd>
					  <em>{{ businessmen.deliveryPrice }}</em>元
					</dd>
				</dl>
				<dl class='businessmen-info-other'>
				  <dt>平均配送时间</dt>
					<dd>
					  <em>{{ businessmen.deliveryTime }}</em>元
					</dd>
				</dl>
			</div>
		</div>
		<div class='businessmen-bulletin'>
		  <h3 class='businessmen-bulletin-title'>公告与活动</h3>
			<p class='businessmen-bulletin-para'>{{ businessmen.bulletin }}</p>
			<ul class='businessmen-supports'>
			  <li class='businessmen-support' v-for='support in businessmen.supports' v-bind:class='support.type'>{{ support.description }}</li>
			</ul>
		</div>
		<div class='businessmen-view'>
		  <h3 class='businessmen-bulletin-title'>商家实景</h3>
			<div class='view-wrapper'>
			  <ul class='views' ref='views' style='width: calViews'>
				  <li class='view' v-for='view in businessmen.pics'>
					  <img v-bind:src='view'>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<style lang='stylus'>
@import '../common/icon.styl'
@import '../common/mixin.styl'
@import './businessmen.styl'
</style>

<script src='./businessmen.js'></script>