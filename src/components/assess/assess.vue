<template>
  <div class='assess'>
		<h3 class='assess-intro-title'>商品评价</h3>
		<ul class='assess-types'>
			<li class='assess-type'>
				<button type='button' class='chosetype chosetype-selected'>全部 {{}}</button>
			</li>
			<li class='assess-type'>
				<button type='button' class='chosetype'>推荐 {{}}</button>
			</li>
			<li class='assess-type'>
				<button type='button' class='chosetype'>吐槽 {{}}</button>
			</li>
		</ul>
	</div>
</template>

<style lang='stylus'>
@import './assess.styl'
</style>

<script src='./assess.js'>

</script>