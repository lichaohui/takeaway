import star from '@/components/star/star.vue'
import assess from '@/components/assess/assess.vue'

export default {
	props: {
		businessmen: {
			type: Object
		}
	},
	data() {
		return {
			showType: 'all',
			ratings: []
		}
	},
	components: {
		star,
		assess
	},
	created() {
		this.$http.get('/api/ratings').then((res) => {
			if (res.body.isSuccess) {
			  /*
				 * 如果请求成功并且返回数据成功
				 * 则把返回的数据赋值给当前实例的businessmen属性
				 */
				this.ratings = res.body.data
				this.$nextTick(()=>{
					this.$refs.rating.style.height = window.innerHeight-327 + 'px'
				})
			} else {
			   // 如果请求成功但并没有返回对应数据则提示返回的信息
			   alert(res.body.message)
			}
		}, (res) => {
		  // 如果请求失败则提示失败信息
		  alert(res.statusText)
	  })
	},
	methods: {
		changeType(type) {
			this.showType = type
		}
	}
}