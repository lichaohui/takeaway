import bScroll from 'better-scroll'
import carbutton from '@/components/carbutton/carbutton.vue'

export default {
	props: {
		businessmen: {
      type: Object
    },
		selectedFoods: {
			type: Array,
			default () {
				return []
			}
		},
		tpl: {
			type: String,
			default: 'shopcar-tpl'
		}
	},
	data () {
	  return {
		  isShopcarShow: false
	  }
  },
	computed: {
		calPrice () {
			let totalPrice = 0
			for(let food of this.selectedFoods){
				totalPrice += food.count * food.price 
			}
			return totalPrice
		},
		calCount () {
			let totalCount = 0
			for(let food of this.selectedFoods){
				totalCount += food.count
			}
			if(totalCount == 0){
				this.isShopcarShow = false
			}
			return totalCount
		},
		calFoodsHeight () {
			let foodHeight = 41
			for(let food of this.selectedFoods){
				if(food.count > 0){
					foodHeight += 45
				}
			}
			if(foodHeight >= 221){
				foodHeight = 221
			}
			return foodHeight
		}
	},
	methods: {
		toggleShopcar() {
			if(this.calCount > 0 ) {
				this.isShopcarShow = !this.isShopcarShow
			}
		},
		hiddenShopcar() {
			this.isShopcarShow = false
		},
		chopcarClear() {
			for(let food of this.selectedFoods){
				if(food.count > 0){
					food.count = 0
				}
			}
		}
	},
	components: {
		carbutton
	}
}