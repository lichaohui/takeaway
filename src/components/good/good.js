import bScroll from 'better-scroll'
import shopcar from '@/components/shopcar/shopcar.vue'
import carbutton from '@/components/carbutton/carbutton.vue'
import food from '@/components/food/food.vue'

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
  data () {
	  return {
		  goods: [],
			goodHeights: [],
			scrollY: 0,
			selectedFood: {},
			isFoodShow: false
	  }
  },
	components: {
		shopcar,
		carbutton,
		food
	},
	computed: {
		currentIndex() {
			let lastHeight
			let nextHeight
			for(let i=0;i<this.goodHeights.length;i++){
				lastHeight=this.goodHeights[i]
				nextHeight=this.goodHeights[i+1]
				if(nextHeight == 'underfined'){
					return i+1
				}
				if(lastHeight <= this.scrollY && this.scrollY < nextHeight){
					return i+1
				}
			}
			return 0
		},
		calFoods() {
			let selectedFoods = []
			for(let good of this.goods){
				for(let food of good.foods){
					selectedFoods.push(food)
				}
			}
			return selectedFoods
		}
	},
  created () {
	  /*
		 * 通过vue-resource这个插件发送ajax请求
		 * /api/goods是后端路由
		 */
	  this.$http.get('/api/goods').then((res) => {
		  if (res.body.isSuccess) {
			  /*
				 * 如果请求成功并且返回数据成功
				 * 则把返回的数据赋值给当前实例的businessmen属性
				 */
				this.goods = res.body.data
				this.$nextTick(()=>{
					//调用_initScroll方法初始化页面滚动
				  this._initScroll()
					//计算每个商品区块的高度
					this._calcuHeight()
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
	methods:{
		/*
		 * 自定义一个_initScroll方法来初始化页面元素的滚动
		 * 通过better-scroll组件来实现
		 */
		_initScroll () {
			this.asideScroll=new bScroll(this.$refs.sidenav,{
				click: true
			})
			this.goodScroll=new bScroll(this.$refs.goods,{
				click: true,
				probeType: 3
			})
			this.goodScroll.on('scroll',(pos)=>{
				this.scrollY = Math.abs(Math.round(pos.y))
			})
		},
		//计算高度的方法
		_calcuHeight () {
			let goods=this.$refs.goods.getElementsByClassName('good')
			let itemHeight=0;
			for(let i=0;i<goods.length;i++){
				itemHeight += goods[i].clientHeight;
				this.goodHeights.push(itemHeight);
			}
		},
		//左侧菜单的选中方法
		choseGood (index) {
			let scrollY
			index == 0 ? scrollY = 0 : scrollY = this.goodHeights[index-1]
			this.goodScroll.scrollTo(0,-scrollY,1000)
		}
	},
}
