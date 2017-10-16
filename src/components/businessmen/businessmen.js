import star from '@/components/star/star.vue'

export default {
  props: {
    businessmen: {
      type: Object
    }
  },
	data () {
		return {
			isCollected : JSON.parse(window.localStorage.isCollecteds)[`businessmen${this.businessmen.id}`]
		}
	},
  components: {
    star
  },
  computed: {
    calViews () {
      let l = 0
      for (let view of this.$refs.views.getElementsByClassName('view')) {
        l += view.getElementsByTagName('img')[0].clientWidth + 12
      }
      return l + 'px'
    },
		calCollectText () {
			return this.isCollected ? '已收藏' : '未收藏'
		}
  },
  created () {
    this.$forceUpdate(() => {
      this.$refs.views.style.width = this.calViews
    }),
		this.$nextTick(() => {
			this.$refs.mainer.style.height = window.innerHeight - 162 + 'px'
		})
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.views.style.width = this.calViews
    })
  },
	methods: {
		toggleCollect() {
			this.isCollected = !this.isCollected
			let bid = this.businessmen.id
			let _isCollecteds
			if(window.localStorage.isCollecteds){
				_isCollecteds = JSON.parse(window.localStorage.isCollecteds)
			}else{
				_isCollecteds = {}
			}
			_isCollecteds[`businessmen${bid}`] = this.isCollected
			window.localStorage.isCollecteds = JSON.stringify(_isCollecteds)
		}
	}
}
