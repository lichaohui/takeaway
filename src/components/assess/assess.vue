<template>
	<ul class='assess-types'>
		<li class='assess-type'>
			<button type='button' class='chosetype' v-bind:class='showType == "all" ? "chosetype-selected" : "chosetype-default" ' v-on:click='changeType("all")'>全部 {{ ratings.length }}</button>
		</li>
		<li class='assess-type'>
			<button type='button' class='chosetype' v-bind:class='showType == "good" ? "chosetype-selected" : "chosetype-default" ' v-on:click='changeType("good")'>推荐 {{ queryRatings('good').length }}</button>
		</li>
		<li class='assess-type'>
			<button type='button' class='chosetype' v-bind:class='showType == "bad" ? "chosetype-selected" : "chosetype-default" ' v-on:click='changeType("bad")'>吐槽 {{ queryRatings('bad').length }}</button>
		</li>
	</ul>
</template>

<style lang='stylus'>
@import '../common/icon.styl'
@import './assess.styl'
</style>

<script src='./assess.js'></script>