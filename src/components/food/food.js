import shopcar from '@/components/shopcar/shopcar.vue'

export default {
	props: {
    businessmen: {
      type: Object
    },
		tpl: {
			type: String,
			default: 'good-tpl'
		}
  },
	data() {
		return {
			food: {}
		}
	},
	components: {
		shopcar
	},
	created() {
		this.$nextTick(() => {
			this.$http.get('/api/food',{'params':this.$route.query}).then((res) => {
				if (res.body.isSuccess) {
					/*
					 * 如果请求成功并且返回数据成功
					 * 则把返回的数据赋值给当前实例的businessmen属性
					 */
					this.food = res.body.data
				 } else {
					 // 如果请求成功但并没有返回对应数据则提示返回的信息
					 alert(res.body.message)
				 }
			 }, (res) => {
				 // 如果请求失败则提示失败信息
				 alert(res.statusText)
			 })
		})
	},
	methods: {
		back() {
			history.go(-1)
		}
	}
}