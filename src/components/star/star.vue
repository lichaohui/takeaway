<template>
  <ul class='stars' v-bind:class='starType'>
	  <li v-for='star in stars' class='star' v-bind:class='star'></li>
	</ul>
</template>

<style lang='stylus'>
@import '../common/mixin.styl'
@import './star.styl'		
</style>

<script src='./star.js'></script>