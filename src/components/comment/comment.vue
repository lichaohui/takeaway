<template>
  <main class='main main-comment'>
	  <div class='score'>
		  <section class='score-score'>
			  <em class='score-score-score'>{{ businessmen.score }}</em>
				<h4 class='overall'>综合评分</h4>
				<p class='score-para'>高于周边商家{{ businessmen.rankRate}}%</p>
			</section>
			<dl class='score-star'>
			  <dt class='score-star-dt'>服务态度</dt>
				<dd class='score-star-dd'>
				  <star v-bind:size='36' v-bind:score='businessmen.serviceScore'></star>
					<em>{{ businessmen.serviceScore }}</em>
				</dd>
				<br>
				<dt class='score-star-dt'>食品质量</dt>
				<dd class='score-star-dd'>
				  <star v-bind:size='36' v-bind:score='businessmen.foodScore'></star>
					<em>{{ businessmen.foodScore }}</em>
				</dd>
				<br>
				<dt class='score-star-dt'>送达时间</dt>
				<dd class='score-star-dd delivery-time'>{{ businessmen.deliveryTime }}分钟</dd>
			</dl>
		</div>
		<div class='comment-area'>
		  <assess v-bind:ratings='ratings' v-bind:showType='showType' v-on:change-type='changeType'></assess>
			<div class='comment-wrapper' ref='rating'>
			  <ul class='comments'>
					<li class='comment' v-show='showType == "all" || showType == rating.rateType' v-for='rating in ratings'>
						<img v-bind:src='rating.avatar' class='customer-avatar' width='34' height='34'>
						<section class='comment-info'>
							<h4 class='customer-name'>{{ rating.username }}</h4>
							<time class='comment-created-at'>{{ rating.rateTime }}</time>
							<star v-bind:size='24' v-bind:score='rating.score'></star>
							<em v-show='rating.deliveryTime' class='costomer-delivery'>{{ rating.deliveryTime }}分钟送达</em>
							<p class='comment-para'>{{ rating.text }}</p>
							<ul class='recommends' v-show='rating.recommend.length > 0' v-bind:class='rating.rateType == "good" ? "icon-thumb_up" : "icon-thumb_down"'>
								<li v-for='recommend in rating.recommend' class='recommend'>{{ recommend }}</li>
							</ul>
						</section>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<style lang='stylus'>
@import './comment.styl'
</style>

<script src='./comment.js'></script>