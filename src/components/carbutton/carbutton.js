import Vue from 'vue'

export default {
	props: {
		food: {
			type: Object,
		},
		tpl: {
			type: String,
		}
	},
	created () {
		Vue.set(this.food,'count',0)
	},
	methods: {
		addFood(num) {
			this.food.count += num
			if(this.food.count < 0){
				this.food.count = 0
			}
		}
	}
}