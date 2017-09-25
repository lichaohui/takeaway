import star from '@/components/star/star.vue'

export default {
  props: {
    businessmen: {
      type: Object
    }
  },
  data () {
	  return {
		  isLayerShow: false
	  }
  },
  methods: {
	  showLayer () {
		  this.isLayerShow = true
	  },
	  closeLayer () {
		  this.isLayerShow = false
	  }
  },
  components: {
	  'v-star': star
  }
}
