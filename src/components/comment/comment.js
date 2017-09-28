import star from '../star/star.vue'
import assess from '../assess/assess.vue'

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
				/*this.$nextTick(()=>{
					//调用_initScroll方法初始化页面滚动
				  this._initScroll()
					//计算每个商品区块的高度
					this._calcuHeight()
				})*/
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