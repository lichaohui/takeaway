export default {
	props: {
		ratings: {
			type: Array,
			default () {
				return []
			}
		},
		showType: {
			type: String
		}
	},
	methods: {
		changeType(type) {
			this.$emit('change-type',type)
		},
		queryRatings(type) {
			return this.ratings.filter((rating) => {
				return rating.rateType == type
			})
		}
	}
}