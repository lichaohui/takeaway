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
		<assess v-bind:ratings='ratings' v-bind:showType='showType' v-on:change-type='changeType'></assess>
	</main>
</template>

<style lang='stylus'>
@import './comment.styl'
</style>

<script src='./comment.js'></script>