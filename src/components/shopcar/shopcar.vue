<template>
  <div class='shopcar-wrapper'>
	  <transition name="bounce">
	    <div class='shopcar-detail' v-show='isShopcarShow' v-bind:style="{ top: -calFoodsHeight + 'px' }">
		    <header class='shopcar-header'>
			    <h3 class='shopcar-title'>购物车</h3>
			    <button type='button' class='shopcar-clear' v-on:click='chopcarClear()'>清空</button>
		    </header>
				<div ref='shopcars' class='shopcars-area'>
					<transition-group name="food" tag='ul' class='shopcars'>
						<li v-for='(selectedFood, index) in selectedFoods' v-show='selectedFood.count > 0' class='shopcars-item'  v-bind:key='index'>
							<h4 class='food-title'>{{ selectedFood.name }}</h4>
							<em class='food-totalprice'>￥{{ selectedFood.price*selectedFood.count }}</em>
							<carbutton v-bind:food='selectedFood' v-bind:tpl='tpl'></carbutton>
						</li>
					</transition-group>	
				</div>
		  </div>
		</transition>
	  <section class='shopcar-info'>
		  <span class='shopping' v-bind:class=" calCount > 0 ? 'shopping-active' : 'shopping-default' " v-on:click='toggleShopcar()'>
			  <i class='icon-shopping_cart'></i>
				<em class='foodCount' v-show='calCount > 0'>{{ calCount }}</em>
			</span>
			<em class='total-price' v-bind:class=" calCount > 0 ? 'total-price-active' : '' ">￥{{ calPrice }}</em>
			<i class='send-price'>另需配送费{{ businessmen.deliveryPrice }}元</i>
		</section>
		<section class='from-price' v-if='calCount == 0'>{{ businessmen.minPrice }}元起送</section>
		<section class='from-price' v-if='0 < calPrice && calPrice < businessmen.minPrice'>还差{{ businessmen.minPrice - calPrice }}元配送</section>
		<section class='from-price' v-if='calPrice >= businessmen.minPrice'>
		  <a href='#' class='gopay'>去结算</a>
		</section>
		<transition name='bglayer'>
		  <div class='bglayer' v-show='isShopcarShow' v-on:click='hiddenShopcar()'></div>
		</transition>	
	</div>
</template>

<style lang='stylus'>
@import '../common/icon.styl'
@import './shopcar.styl'
</style>

<script src='./shopcar.js'></script>
