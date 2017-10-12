import star from '@/components/star/star.vue'

export default {
	props: {
		businessmen: {
			type: Object
		}
	},
	components: {
		star
	},
	computed: {
		calViews() {
			let l = 0
			for(let view of this.$refs.views.getElementsByClassName('view')){
				l += view.getElementsByTagName('img')[0].clientWidth + 12
			}
			return l + 'px'
		}
	},
	created() {
		this.$forceUpdate(() => {
			this.$refs.views.style.width = this.calViews
		}),
		this.$nextTick(() => {
			this.$refs.mainer.style.height = window.innerHeight-162 + 'px'
		})
	},
	mounted() {
		this.$nextTick(() => {
			this.$refs.views.style.width = this.calViews
		})	
	}
}