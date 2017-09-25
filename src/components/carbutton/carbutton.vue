<template>
  <section class='carcontrol' v-bind:class='tpl'>
	  <transition name="slide-fade">
	    <i class='car-decrease icon-remove_circle_outline' v-show='food.count > 0' v-on:click='addFood(-1)'></i>
		</transition>
		<em class='count' v-show='food.count > 0'>{{ food.count }}</em>
		<i class='car-add icon-add_circle' v-on:click='addFood(1)'></i>
	</section>
</template>

<style lang='stylus'>
@import '../common/icon.styl'
@import './carbutton.styl'
</style>

<script src='./carbutton.js'></script>
