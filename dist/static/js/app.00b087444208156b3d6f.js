webpackJsonp([1],Array(18).concat([
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(84)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(99),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(88)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(103),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(91)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(106),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(87)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(102),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_good_good_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_good_good_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_good_good_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_businessmen_businessmen_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_businessmen_businessmen_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_businessmen_businessmen_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_comment_comment_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_comment_comment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_comment_comment_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_food_food_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_food_food_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_food_food_vue__);

// 引入vue-router组件

// 引入一些组件





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

// 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
var routes = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_2__components_good_good_vue___default.a }, { path: '/good', component: __WEBPACK_IMPORTED_MODULE_2__components_good_good_vue___default.a }, { path: '/businessmen', component: __WEBPACK_IMPORTED_MODULE_3__components_businessmen_businessmen_vue___default.a }, { path: '/comment', component: __WEBPACK_IMPORTED_MODULE_4__components_comment_comment_vue___default.a }, { path: '/food', component: __WEBPACK_IMPORTED_MODULE_5__components_food_food_vue___default.a }, { path: '/data' }];

// 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
	// （缩写）相当于 routes: routes
	routes: routes
}));

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(89)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(104),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_resource__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(35);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_resource__["a" /* default */]);
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_2__App___default.a }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header_header_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_header_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_js_getRequest_js__ = __webpack_require__(110);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			businessmen: {
				id: function () {
					var queryParam = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__static_js_getRequest_js__["a" /* getRequest */])();
					return queryParam.id;
				}()
			}
		};
	},

	/*
  * 每个 Vue 实例在被创建之前都要经过一系列的初始化过程。例如需要设置数据监听、编
 * 译模板、挂载实例到 DOM、在数据变化时更新 DOM 等。同时在这个过程中也会运行一些* 叫做生命周期钩子的函数，给予用户机会在一些特定的场景下添加他们自己的代码。
   *
 * 比如 created 钩子可以用来在一个实例被创建之后执行代码：
  */
	created: function created() {
		var _this = this;

		/*
  * 通过vue-resource这个插件发送ajax请求
  * /api/seller是后端路由
  */
		this.$http.get('/api/seller?id=' + this.businessmen.id).then(function (res) {
			if (res.body.isSuccess) {
				/*
    * 如果请求成功并且返回数据成功
    * 则把返回的数据赋值给当前实例的businessmen属性
    */
				_this.businessmen = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, _this.businessmen, res.body.data);
			} else {
				// 如果请求成功但并没有返回对应数据则提示返回的信息
				alert(res.body.message);
			}
		}, function (res) {
			// 如果请求失败则提示失败信息
			alert(res.statusText);
		});
	},

	components: {
		'v-header': __WEBPACK_IMPORTED_MODULE_1__components_header_header_vue___default.a
	}
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		ratings: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		showType: {
			type: String
		}
	},
	methods: {
		changeType: function changeType(type) {
			this.$emit('change-type', type);
		},
		queryRatings: function queryRatings(type) {
			return this.ratings.filter(function (rating) {
				return rating.rateType == type;
			});
		}
	}
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_star_star_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_star_star_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_star_star_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    businessmen: {
      type: Object
    }
  },
  data: function data() {
    return {
      isCollected: JSON.parse(window.localStorage.isCollecteds)['businessmen' + this.businessmen.id]
    };
  },

  components: {
    star: __WEBPACK_IMPORTED_MODULE_2__components_star_star_vue___default.a
  },
  computed: {
    calViews: function calViews() {
      var l = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.$refs.views.getElementsByClassName('view')), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var view = _step.value;

          l += view.getElementsByTagName('img')[0].clientWidth + 12;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return l + 'px';
    },
    calCollectText: function calCollectText() {
      return this.isCollected ? '已收藏' : '未收藏';
    }
  },
  created: function created() {
    var _this = this;

    this.$forceUpdate(function () {
      _this.$refs.views.style.width = _this.calViews;
    }), this.$nextTick(function () {
      _this.$refs.mainer.style.height = window.innerHeight - 162 + 'px';
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.$refs.views.style.width = _this2.calViews;
    });
  },

  methods: {
    toggleCollect: function toggleCollect() {
      this.isCollected = !this.isCollected;
      var bid = this.businessmen.id;
      var _isCollecteds = void 0;
      if (window.localStorage.isCollecteds) {
        _isCollecteds = JSON.parse(window.localStorage.isCollecteds);
      } else {
        _isCollecteds = {};
      }
      _isCollecteds['businessmen' + bid] = this.isCollected;
      window.localStorage.isCollecteds = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(_isCollecteds);
    }
  }
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		food: {
			type: Object
		},
		tpl: {
			type: String
		}
	},
	created: function created() {
		__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].set(this.food, 'count', 0);
	},

	methods: {
		addFood: function addFood(num) {
			this.food.count += num;
			if (this.food.count < 0) {
				this.food.count = 0;
			}
		}
	}
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_star_star_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_star_star_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_star_star_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_assess_assess_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_assess_assess_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_assess_assess_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		businessmen: {
			type: Object
		}
	},
	data: function data() {
		return {
			showType: 'all',
			ratings: []
		};
	},

	components: {
		star: __WEBPACK_IMPORTED_MODULE_0__components_star_star_vue___default.a,
		assess: __WEBPACK_IMPORTED_MODULE_1__components_assess_assess_vue___default.a
	},
	created: function created() {
		var _this = this;

		this.$http.get('/api/ratings').then(function (res) {
			if (res.body.isSuccess) {
				/*
    * 如果请求成功并且返回数据成功
    * 则把返回的数据赋值给当前实例的businessmen属性
    */
				_this.ratings = res.body.data;
				_this.$nextTick(function () {
					_this.$refs.rating.style.height = window.innerHeight - 327 + 'px';
				});
			} else {
				// 如果请求成功但并没有返回对应数据则提示返回的信息
				alert(res.body.message);
			}
		}, function (res) {
			// 如果请求失败则提示失败信息
			alert(res.statusText);
		});
	},

	methods: {
		changeType: function changeType(type) {
			this.showType = type;
		}
	}
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_carbutton_carbutton_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_carbutton_carbutton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_carbutton_carbutton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_assess_assess_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_assess_assess_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_assess_assess_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		food: {
			type: Object,
			default: {}
		},
		tpl: {
			type: String
		}
	},
	data: function data() {
		return {
			showType: 'all'
		};
	},

	components: {
		carbutton: __WEBPACK_IMPORTED_MODULE_0__components_carbutton_carbutton_vue___default.a,
		assess: __WEBPACK_IMPORTED_MODULE_1__components_assess_assess_vue___default.a
	},
	methods: {
		hideFooder: function hideFooder() {
			this.$emit('fooder-change', false);
		},
		changeType: function changeType(type) {
			this.showType = type;
		}
	}
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_better_scroll__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_better_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_shopcar_shopcar_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_shopcar_shopcar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_shopcar_shopcar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_carbutton_carbutton_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_carbutton_carbutton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_carbutton_carbutton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_food_food_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_food_food_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_food_food_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		businessmen: {
			type: Object
		},
		tpl: {
			type: String,
			default: 'good-tpl'
		}
	},
	data: function data() {
		return {
			goods: [],
			goodHeights: [],
			scrollY: 0,
			selectedFood: {},
			isFoodShow: false
		};
	},

	components: {
		shopcar: __WEBPACK_IMPORTED_MODULE_2__components_shopcar_shopcar_vue___default.a,
		carbutton: __WEBPACK_IMPORTED_MODULE_3__components_carbutton_carbutton_vue___default.a,
		food: __WEBPACK_IMPORTED_MODULE_4__components_food_food_vue___default.a
	},
	computed: {
		currentIndex: function currentIndex() {
			var lastHeight = void 0;
			var nextHeight = void 0;
			for (var i = 0; i < this.goodHeights.length; i++) {
				lastHeight = this.goodHeights[i];
				nextHeight = this.goodHeights[i + 1];
				if (nextHeight == 'underfined') {
					return i + 1;
				}
				if (lastHeight <= this.scrollY && this.scrollY < nextHeight) {
					return i + 1;
				}
			}
			return 0;
		},
		calFoods: function calFoods() {
			var selectedFoods = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.goods), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var good = _step.value;
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(good.foods), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var _food = _step2.value;

							selectedFoods.push(_food);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return selectedFoods;
		}
	},
	created: function created() {
		var _this = this;

		/*
  * 通过vue-resource这个插件发送ajax请求
  * /api/goods是后端路由
  */
		this.$http.get('/api/goods').then(function (res) {
			if (res.body.isSuccess) {
				/*
    * 如果请求成功并且返回数据成功
    * 则把返回的数据赋值给当前实例的businessmen属性
    */
				_this.goods = res.body.data;
				_this.$nextTick(function () {
					//调用_initScroll方法初始化页面滚动
					_this._initScroll();
					//计算每个商品区块的高度
					_this._calcuHeight();
				});
			} else {
				// 如果请求成功但并没有返回对应数据则提示返回的信息
				alert(res.body.message);
			}
		}, function (res) {
			// 如果请求失败则提示失败信息
			alert(res.statusText);
		});
	},

	methods: {
		/*
   * 自定义一个_initScroll方法来初始化页面元素的滚动
   * 通过better-scroll组件来实现
   */
		_initScroll: function _initScroll() {
			var _this2 = this;

			this.asideScroll = new __WEBPACK_IMPORTED_MODULE_1_better_scroll___default.a(this.$refs.sidenav, {
				click: true
			});
			this.goodScroll = new __WEBPACK_IMPORTED_MODULE_1_better_scroll___default.a(this.$refs.goods, {
				click: true,
				probeType: 3
			});
			this.goodScroll.on('scroll', function (pos) {
				_this2.scrollY = Math.abs(Math.round(pos.y));
			});
		},

		//计算高度的方法
		_calcuHeight: function _calcuHeight() {
			var goods = this.$refs.goods.getElementsByClassName('good');
			var itemHeight = 0;
			for (var i = 0; i < goods.length; i++) {
				itemHeight += goods[i].clientHeight;
				this.goodHeights.push(itemHeight);
			}
		},

		//左侧菜单的选中方法
		choseGood: function choseGood(index) {
			var scrollY = void 0;
			index == 0 ? scrollY = 0 : scrollY = this.goodHeights[index - 1];
			this.goodScroll.scrollTo(0, -scrollY, 1000);
		},

		//险种food的方法
		choseFood: function choseFood(food) {
			this.selectedFood = food;
			this.isFoodShow = !this.isFoodShow;
		},
		fooderChange: function fooderChange(val) {
			this.isFoodShow = val;
		}
	}
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_star_star_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_star_star_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_star_star_vue__);


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    businessmen: {
      type: Object
    }
  },
  data: function data() {
    return {
      isLayerShow: false
    };
  },

  methods: {
    showLayer: function showLayer() {
      this.isLayerShow = true;
    },
    closeLayer: function closeLayer() {
      this.isLayerShow = false;
    }
  },
  components: {
    'v-star': __WEBPACK_IMPORTED_MODULE_0__components_star_star_vue___default.a
  }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_better_scroll__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_better_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_carbutton_carbutton_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_carbutton_carbutton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_carbutton_carbutton_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		businessmen: {
			type: Object
		},
		selectedFoods: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		tpl: {
			type: String,
			default: 'shopcar-tpl'
		}
	},
	data: function data() {
		return {
			isShopcarShow: false
		};
	},

	computed: {
		calPrice: function calPrice() {
			var totalPrice = 0;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.selectedFoods), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var food = _step.value;

					totalPrice += food.count * food.price;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return totalPrice;
		},
		calCount: function calCount() {
			var totalCount = 0;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.selectedFoods), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var food = _step2.value;

					totalCount += food.count;
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			if (totalCount == 0) {
				this.isShopcarShow = false;
			}
			return totalCount;
		},
		calFoodsHeight: function calFoodsHeight() {
			var foodHeight = 41;
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.selectedFoods), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var food = _step3.value;

					if (food.count > 0) {
						foodHeight += 45;
					}
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			if (foodHeight >= 221) {
				foodHeight = 221;
			}
			return foodHeight;
		}
	},
	methods: {
		toggleShopcar: function toggleShopcar() {
			if (this.calCount > 0) {
				this.isShopcarShow = !this.isShopcarShow;
			}
		},
		hiddenShopcar: function hiddenShopcar() {
			this.isShopcarShow = false;
		},
		chopcarClear: function chopcarClear() {
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.selectedFoods), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var food = _step4.value;

					if (food.count > 0) {
						food.count = 0;
					}
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}
		}
	},
	components: {
		carbutton: __WEBPACK_IMPORTED_MODULE_2__components_carbutton_carbutton_vue___default.a
	}
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType: function starType() {
      return 'star-' + this.size;
    },

    // 计算星级指数
    stars: function stars() {
      var stars = [];
      var score = Math.floor(this.score * 2) / 2;
      var hasDecimal = void 0;
      if (score % 1 === 0) {
        hasDecimal = false;
      } else {
        hasDecimal = true;
      }
      for (var i = 0; i < Math.floor(score); i++) {
        stars.push('star-on');
      }
      if (hasDecimal) {
        stars.push('star-half');
      }
      while (stars.length < 5) {
        stars.push('star-off');
      }
      return stars;
    }
  }
});

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(85)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(100),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(86)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(101),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(83)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(98),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(82)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(97),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(90)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(105),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "businessmen"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "width": "64",
      "height": "64",
      "src": _vm.businessmen.avatar
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "businessmen-detail"
  }, [_c('h2', {
    staticClass: "businessmen-title"
  }, [_vm._v(_vm._s(_vm.businessmen.name))]), _vm._v(" "), _c('p', {
    staticClass: "description"
  }, [_vm._v(_vm._s(_vm.businessmen.description) + "/" + _vm._s(_vm.businessmen.deliveryTime) + "分钟送达")]), _vm._v(" "), (_vm.businessmen.supports) ? _c('p', {
    staticClass: "support",
    class: _vm.businessmen.supports[0].type
  }, [_vm._v(_vm._s(_vm.businessmen.supports[0].description))]) : _vm._e()]), _vm._v(" "), (_vm.businessmen.supports) ? _c('span', {
    staticClass: "support-count",
    on: {
      "click": _vm.showLayer
    }
  }, [_vm._v(_vm._s(_vm.businessmen.supports.length) + "个"), _c('i', {
    staticClass: "icon-keyboard_arrow_right"
  })]) : _vm._e()]), _vm._v(" "), _c('p', {
    staticClass: "bulletin",
    on: {
      "click": _vm.showLayer
    }
  }, [_vm._v(_vm._s(_vm.businessmen.bulletin)), _c('i', {
    staticClass: "icon-keyboard_arrow_right"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isLayerShow),
      expression: "isLayerShow"
    }],
    staticClass: "layer"
  }, [_c('h2', {
    staticClass: "layer-businessmen-title"
  }, [_vm._v(_vm._s(_vm.businessmen.name))]), _vm._v(" "), _c('v-star', {
    attrs: {
      "size": 48,
      "score": _vm.businessmen.score
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), (_vm.businessmen.supports) ? _c('ul', {
    staticClass: "offers"
  }, _vm._l((_vm.businessmen.supports), function(support) {
    return _c('li', {
      staticClass: "support",
      class: support.type
    }, [_vm._v(_vm._s(support.description))])
  })) : _vm._e(), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('p', {
    staticClass: "bulletin-para"
  }, [_vm._v(_vm._s(_vm.businessmen.bulletin))]), _vm._v(" "), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "title": "关闭"
    },
    on: {
      "click": _vm.closeLayer
    }
  }, [_vm._v("X")])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layer-section-head"
  }, [_c('span', {
    staticClass: "line"
  }), _vm._v(" "), _c('h3', [_vm._v("优惠信息")]), _vm._v(" "), _c('span', {
    staticClass: "line"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layer-section-head"
  }, [_c('span', {
    staticClass: "line"
  }), _vm._v(" "), _c('h3', [_vm._v("商家公告")]), _vm._v(" "), _c('span', {
    staticClass: "line"
  })])
}]}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('main', {
    staticClass: "main main-good"
  }, [_c('aside', {
    ref: "sidenav",
    staticClass: "side-nav"
  }, [_c('ul', {
    staticClass: "side-navbar"
  }, _vm._l((_vm.goods), function(good, index) {
    return _c('li', {
      staticClass: "side-navbar-item",
      class: [good.type, {
        'cur': index == _vm.currentIndex
      }],
      on: {
        "click": function($event) {
          _vm.choseGood(index)
        }
      }
    }, [_vm._v("\n\t\t\t\t  " + _vm._s(good.name) + "\n\t\t\t\t")])
  }))]), _vm._v(" "), _c('div', {
    ref: "goods",
    staticClass: "goods-wrapper"
  }, [_c('ul', {
    staticClass: "goods"
  }, _vm._l((_vm.goods), function(good, goodIndex) {
    return _c('li', {
      staticClass: "good"
    }, [_c('h3', {
      staticClass: "good-name"
    }, [_vm._v(_vm._s(good.name))]), _vm._v(" "), _c('ul', {
      staticClass: "foods"
    }, _vm._l((good.foods), function(food, foodIndex) {
      return _c('li', {
        staticClass: "food"
      }, [_c('img', {
        staticClass: "food-icon",
        attrs: {
          "src": food.icon,
          "width": "57",
          "height": "57"
        },
        on: {
          "click": function($event) {
            _vm.choseFood(food)
          }
        }
      }), _vm._v(" "), _c('section', {
        staticClass: "food-detail"
      }, [_c('h4', {
        staticClass: "food-name",
        on: {
          "click": function($event) {
            _vm.choseFood(food)
          }
        }
      }, [_vm._v(_vm._s(food.name))]), _vm._v(" "), _c('p', {
        staticClass: "food-description"
      }, [_vm._v(_vm._s(food.description))]), _vm._v(" "), _c('dl', {
        staticClass: "food-info"
      }, [_c('dt', [_vm._v("月售")]), _vm._v(" "), _c('dd', [_vm._v(_vm._s(food.sellCount) + "份")])]), _vm._v(" "), _c('dl', {
        staticClass: "food-info"
      }, [_c('dt', [_vm._v("好评率")]), _vm._v(" "), _c('dd', [_vm._v(_vm._s(food.rating) + "%")])]), _vm._v(" "), _c('p', {
        staticClass: "price-area"
      }, [_c('em', {
        staticClass: "price"
      }, [_vm._v("￥" + _vm._s(food.price))]), _vm._v(" "), (food.oldPrice) ? _c('em', {
        staticClass: "old-price"
      }, [_vm._v(_vm._s(food.oldPrice))]) : _vm._e()]), _vm._v(" "), _c('carbutton', {
        attrs: {
          "food": food,
          "tpl": _vm.tpl
        }
      })], 1)])
    }))])
  }))]), _vm._v(" "), _c('food', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isFoodShow),
      expression: "isFoodShow"
    }],
    attrs: {
      "food": _vm.selectedFood
    },
    on: {
      "fooder-change": _vm.fooderChange
    }
  }), _vm._v(" "), _c('shopcar', {
    attrs: {
      "businessmen": _vm.businessmen,
      "selectedFoods": _vm.calFoods
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "carcontrol",
    class: _vm.tpl
  }, [_c('transition', {
    attrs: {
      "name": "slide-fade"
    }
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.count > 0),
      expression: "food.count > 0"
    }],
    staticClass: "car-decrease icon-remove_circle_outline",
    on: {
      "click": function($event) {
        _vm.addFood(-1)
      }
    }
  })]), _vm._v(" "), _c('em', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.count > 0),
      expression: "food.count > 0"
    }],
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.food.count))]), _vm._v(" "), _c('i', {
    staticClass: "car-add icon-add_circle",
    on: {
      "click": function($event) {
        _vm.addFood(1)
      }
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('main', {
    ref: "mainer",
    staticClass: "main main-businessmen"
  }, [_c('div', {
    staticClass: "businessmen-info"
  }, [_c('div', {
    staticClass: "businessmen-info-top"
  }, [_c('section', {
    staticClass: "businessmen-info-name-star"
  }, [_c('h3', {
    staticClass: "businessmen-info-name"
  }, [_vm._v(_vm._s(_vm.businessmen.name))]), _vm._v(" "), _c('star', {
    attrs: {
      "size": 36,
      "score": _vm.businessmen.score
    }
  }), _vm._v(" "), _c('em', {
    staticClass: "rating-count"
  }, [_vm._v("(" + _vm._s(_vm.businessmen.ratingCount) + ")")]), _vm._v(" "), _c('em', {
    staticClass: "sell-count"
  }, [_vm._v("月售" + _vm._s(_vm.businessmen.sellCount) + "单")])], 1), _vm._v(" "), _c('section', {
    staticClass: "collect-area"
  }, [_c('i', {
    staticClass: "collect icon-favorite",
    class: _vm.isCollected ? "collect-after" : "collect-before",
    on: {
      "click": function($event) {
        _vm.toggleCollect()
      }
    }
  }), _vm._v("\n\t\t\t\t\t" + _vm._s(_vm.calCollectText) + "\n\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "businessmen-info-others"
  }, [_c('dl', {
    staticClass: "businessmen-info-other"
  }, [_c('dt', [_vm._v("起送价")]), _vm._v(" "), _c('dd', [_c('em', [_vm._v(_vm._s(_vm.businessmen.minPrice))]), _vm._v("元\n\t\t\t\t\t")])]), _vm._v(" "), _c('dl', {
    staticClass: "businessmen-info-other"
  }, [_c('dt', [_vm._v("商家配送")]), _vm._v(" "), _c('dd', [_c('em', [_vm._v(_vm._s(_vm.businessmen.deliveryPrice))]), _vm._v("元\n\t\t\t\t\t")])]), _vm._v(" "), _c('dl', {
    staticClass: "businessmen-info-other"
  }, [_c('dt', [_vm._v("平均配送时间")]), _vm._v(" "), _c('dd', [_c('em', [_vm._v(_vm._s(_vm.businessmen.deliveryTime))]), _vm._v("元\n\t\t\t\t\t")])])])]), _vm._v(" "), _c('div', {
    staticClass: "businessmen-bulletin"
  }, [_c('h3', {
    staticClass: "businessmen-bulletin-title"
  }, [_vm._v("公告与活动")]), _vm._v(" "), _c('p', {
    staticClass: "businessmen-bulletin-para"
  }, [_vm._v(_vm._s(_vm.businessmen.bulletin))]), _vm._v(" "), _c('ul', {
    staticClass: "businessmen-supports"
  }, _vm._l((_vm.businessmen.supports), function(support) {
    return _c('li', {
      staticClass: "businessmen-support",
      class: support.type
    }, [_vm._v(_vm._s(support.description))])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "businessmen-view"
  }, [_c('h3', {
    staticClass: "businessmen-bulletin-title"
  }, [_vm._v("商家实景")]), _vm._v(" "), _c('div', {
    staticClass: "view-wrapper"
  }, [_c('ul', {
    ref: "views",
    staticClass: "views"
  }, _vm._l((_vm.businessmen.pics), function(view) {
    return _c('li', {
      staticClass: "view"
    }, [_c('img', {
      attrs: {
        "src": view
      }
    })])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "businessmen-intro"
  }, [_c('h3', {
    staticClass: "businessmen-bulletin-title"
  }, [_vm._v("商家信息")]), _vm._v(" "), _vm._l((_vm.businessmen.infos), function(info) {
    return _c('p', {
      staticClass: "businessmen-intro-para"
    }, [_vm._v(_vm._s(info))])
  })], 2)])
},staticRenderFns: []}

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('main', {
    staticClass: "main main-comment"
  }, [_c('div', {
    staticClass: "score"
  }, [_c('section', {
    staticClass: "score-score"
  }, [_c('em', {
    staticClass: "score-score-score"
  }, [_vm._v(_vm._s(_vm.businessmen.score))]), _vm._v(" "), _c('h4', {
    staticClass: "overall"
  }, [_vm._v("综合评分")]), _vm._v(" "), _c('p', {
    staticClass: "score-para"
  }, [_vm._v("高于周边商家" + _vm._s(_vm.businessmen.rankRate) + "%")])]), _vm._v(" "), _c('dl', {
    staticClass: "score-star"
  }, [_c('dt', {
    staticClass: "score-star-dt"
  }, [_vm._v("服务态度")]), _vm._v(" "), _c('dd', {
    staticClass: "score-star-dd"
  }, [_c('star', {
    attrs: {
      "size": 36,
      "score": _vm.businessmen.serviceScore
    }
  }), _vm._v(" "), _c('em', [_vm._v(_vm._s(_vm.businessmen.serviceScore))])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('dt', {
    staticClass: "score-star-dt"
  }, [_vm._v("食品质量")]), _vm._v(" "), _c('dd', {
    staticClass: "score-star-dd"
  }, [_c('star', {
    attrs: {
      "size": 36,
      "score": _vm.businessmen.foodScore
    }
  }), _vm._v(" "), _c('em', [_vm._v(_vm._s(_vm.businessmen.foodScore))])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('dt', {
    staticClass: "score-star-dt"
  }, [_vm._v("送达时间")]), _vm._v(" "), _c('dd', {
    staticClass: "score-star-dd delivery-time"
  }, [_vm._v(_vm._s(_vm.businessmen.deliveryTime) + "分钟")])])]), _vm._v(" "), _c('div', {
    staticClass: "comment-area"
  }, [_c('assess', {
    attrs: {
      "ratings": _vm.ratings,
      "showType": _vm.showType
    },
    on: {
      "change-type": _vm.changeType
    }
  }), _vm._v(" "), _c('div', {
    ref: "rating",
    staticClass: "comment-wrapper"
  }, [_c('ul', {
    staticClass: "comments"
  }, _vm._l((_vm.ratings), function(rating) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.showType == "all" || _vm.showType == rating.rateType),
        expression: "showType == \"all\" || showType == rating.rateType"
      }],
      staticClass: "comment"
    }, [_c('img', {
      staticClass: "customer-avatar",
      attrs: {
        "src": rating.avatar,
        "width": "34",
        "height": "34"
      }
    }), _vm._v(" "), _c('section', {
      staticClass: "comment-info"
    }, [_c('h4', {
      staticClass: "customer-name"
    }, [_vm._v(_vm._s(rating.username))]), _vm._v(" "), _c('time', {
      staticClass: "comment-created-at"
    }, [_vm._v(_vm._s(rating.rateTime))]), _vm._v(" "), _c('star', {
      attrs: {
        "size": 24,
        "score": rating.score
      }
    }), _vm._v(" "), _c('em', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (rating.deliveryTime),
        expression: "rating.deliveryTime"
      }],
      staticClass: "costomer-delivery"
    }, [_vm._v(_vm._s(rating.deliveryTime) + "分钟送达")]), _vm._v(" "), _c('p', {
      staticClass: "comment-para"
    }, [_vm._v(_vm._s(rating.text))]), _vm._v(" "), _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (rating.recommend.length > 0),
        expression: "rating.recommend.length > 0"
      }],
      staticClass: "recommends",
      class: rating.rateType == "good" ? "icon-thumb_up" : "icon-thumb_down"
    }, _vm._l((rating.recommend), function(recommend) {
      return _c('li', {
        staticClass: "recommend"
      }, [_vm._v(_vm._s(recommend))])
    }))], 1)])
  }))])], 1)])
},staticRenderFns: []}

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fooder"
    }
  }, [_c('div', {
    ref: "foodArea",
    staticClass: "fooder"
  }, [_c('div', {
    staticClass: "fooder-content"
  }, [_c('header', {
    staticClass: "fooder-header"
  }, [_c('i', {
    staticClass: "back icon-arrow_lift",
    attrs: {
      "title": "返回"
    },
    on: {
      "click": function($event) {
        _vm.hideFooder()
      }
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "fooder-image",
    attrs: {
      "src": _vm.food.image,
      "width": "100%"
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "fooder-info-left"
  }, [_c('h2', {
    staticClass: "fooder-name"
  }, [_vm._v(_vm._s(_vm.food.name))]), _vm._v(" "), _c('p', {
    staticClass: "fooder-info-sale"
  }, [_c('span', [_vm._v("月售" + _vm._s(_vm.food.sellCount) + "份")]), _vm._v(" "), _c('span', [_vm._v("好评率" + _vm._s(_vm.food.rating) + "%")])]), _vm._v(" "), _c('p', {
    staticClass: "fooder-price"
  }, [_c('span', {
    staticClass: "fooder-price-now"
  }, [_vm._v("￥" + _vm._s(_vm.food.price))]), _vm._v(" "), (_vm.food.oldPrice) ? _c('span', {
    staticClass: "fooder-price-old"
  }, [_vm._v(_vm._s(_vm.food.oldPrice))]) : _vm._e()])]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.count == 0),
      expression: "food.count == 0"
    }],
    staticClass: "joincar",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.food.count += 1
      }
    }
  }, [_vm._v("加入购物车")]), _vm._v(" "), _c('carbutton', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.count > 0),
      expression: "food.count > 0"
    }],
    staticClass: "joincared",
    attrs: {
      "food": _vm.food,
      "tpl": _vm.tpl
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "fooder-intro"
  }, [_c('h3', {
    staticClass: "fooder-intro-title"
  }, [_vm._v("商品介绍")]), _vm._v(" "), _c('p', {
    staticClass: "fooder-intro-para"
  }, [_vm._v(_vm._s(_vm.food.info))])]), _vm._v(" "), _c('div', {
    staticClass: "fooder-assess"
  }, [_c('h3', {
    staticClass: "fooder-intro-title"
  }, [_vm._v("商品评价")]), _vm._v(" "), _c('assess', {
    attrs: {
      "ratings": _vm.food.ratings,
      "showType": _vm.showType
    },
    on: {
      "change-type": _vm.changeType
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "assess-list"
  }, _vm._l((_vm.food.ratings), function(rating) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.showType == "all" || _vm.showType == rating.rateType),
        expression: "showType == \"all\" || showType == rating.rateType"
      }],
      staticClass: "assess-item"
    }, [_c('time', {
      staticClass: "assess-time"
    }, [_vm._v(_vm._s(rating.rateTime))]), _vm._v(" "), _c('span', {
      staticClass: "customer"
    }, [_vm._v(_vm._s(rating.username)), _c('img', {
      staticClass: "assess-avatar",
      attrs: {
        "src": rating.avatar,
        "width": "20"
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "assess-para"
    }, [_c('i', {
      class: rating.rateType == 'good' ? 'icon-thumb_up' : 'icon-thumb_down'
    }), _vm._v(_vm._s(rating.text))])])
  }))], 1)])])])
},staticRenderFns: []}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "stars",
    class: _vm.starType
  }, _vm._l((_vm.stars), function(star) {
    return _c('li', {
      staticClass: "star",
      class: star
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('v-header', {
    attrs: {
      "businessmen": _vm.businessmen
    }
  }), _vm._v(" "), _c('nav', {
    staticClass: "nav border-xs"
  }, [_c('ul', {
    staticClass: "navbar"
  }, [_c('li', {
    staticClass: "navbar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/good"
    }
  }, [_vm._v("商品")])], 1), _vm._v(" "), _c('li', {
    staticClass: "navbar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/businessmen"
    }
  }, [_vm._v("商家")])], 1), _vm._v(" "), _c('li', {
    staticClass: "navbar-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/comment"
    }
  }, [_vm._v("评论")])], 1)])]), _vm._v(" "), _c('keep-alive', [_c('router-view', {
    attrs: {
      "businessmen": _vm.businessmen
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "shopcar-wrapper"
  }, [_c('transition', {
    attrs: {
      "name": "bounce"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShopcarShow),
      expression: "isShopcarShow"
    }],
    staticClass: "shopcar-detail",
    style: ({
      top: -_vm.calFoodsHeight + 'px'
    })
  }, [_c('header', {
    staticClass: "shopcar-header"
  }, [_c('h3', {
    staticClass: "shopcar-title"
  }, [_vm._v("购物车")]), _vm._v(" "), _c('button', {
    staticClass: "shopcar-clear",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.chopcarClear()
      }
    }
  }, [_vm._v("清空")])]), _vm._v(" "), _c('div', {
    ref: "shopcars",
    staticClass: "shopcars-area"
  }, [_c('transition-group', {
    staticClass: "shopcars",
    attrs: {
      "name": "food",
      "tag": "ul"
    }
  }, _vm._l((_vm.selectedFoods), function(selectedFood, index) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (selectedFood.count > 0),
        expression: "selectedFood.count > 0"
      }],
      key: index,
      staticClass: "shopcars-item"
    }, [_c('h4', {
      staticClass: "food-title"
    }, [_vm._v(_vm._s(selectedFood.name))]), _vm._v(" "), _c('em', {
      staticClass: "food-totalprice"
    }, [_vm._v("￥" + _vm._s(selectedFood.price * selectedFood.count))]), _vm._v(" "), _c('carbutton', {
      attrs: {
        "food": selectedFood,
        "tpl": _vm.tpl
      }
    })], 1)
  }))], 1)])]), _vm._v(" "), _c('section', {
    staticClass: "shopcar-info"
  }, [_c('span', {
    staticClass: "shopping",
    class: _vm.calCount > 0 ? 'shopping-active' : 'shopping-default',
    on: {
      "click": function($event) {
        _vm.toggleShopcar()
      }
    }
  }, [_c('i', {
    staticClass: "icon-shopping_cart"
  }), _vm._v(" "), _c('em', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.calCount > 0),
      expression: "calCount > 0"
    }],
    staticClass: "foodCount"
  }, [_vm._v(_vm._s(_vm.calCount))])]), _vm._v(" "), _c('em', {
    staticClass: "total-price",
    class: _vm.calCount > 0 ? 'total-price-active' : ''
  }, [_vm._v("￥" + _vm._s(_vm.calPrice))]), _vm._v(" "), _c('i', {
    staticClass: "send-price"
  }, [_vm._v("另需配送费" + _vm._s(_vm.businessmen.deliveryPrice) + "元")])]), _vm._v(" "), (_vm.calCount == 0) ? _c('section', {
    staticClass: "from-price"
  }, [_vm._v(_vm._s(_vm.businessmen.minPrice) + "元起送")]) : _vm._e(), _vm._v(" "), (0 < _vm.calPrice && _vm.calPrice < _vm.businessmen.minPrice) ? _c('section', {
    staticClass: "from-price"
  }, [_vm._v("还差" + _vm._s(_vm.businessmen.minPrice - _vm.calPrice) + "元配送")]) : _vm._e(), _vm._v(" "), (_vm.calPrice >= _vm.businessmen.minPrice) ? _c('section', {
    staticClass: "from-price"
  }, [_c('a', {
    staticClass: "gopay",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("去结算")])]) : _vm._e(), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "bglayer"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShopcarShow),
      expression: "isShopcarShow"
    }],
    staticClass: "bglayer",
    on: {
      "click": function($event) {
        _vm.hiddenShopcar()
      }
    }
  })])], 1)
},staticRenderFns: []}

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "assess-types"
  }, [_c('li', {
    staticClass: "assess-type"
  }, [_c('button', {
    staticClass: "chosetype",
    class: _vm.showType == "all" ? "chosetype-selected" : "chosetype-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.changeType("all")
      }
    }
  }, [_vm._v("全部 " + _vm._s(_vm.ratings.length))])]), _vm._v(" "), _c('li', {
    staticClass: "assess-type"
  }, [_c('button', {
    staticClass: "chosetype",
    class: _vm.showType == "good" ? "chosetype-selected" : "chosetype-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.changeType("good")
      }
    }
  }, [_vm._v("推荐 " + _vm._s(_vm.queryRatings('good').length))])]), _vm._v(" "), _c('li', {
    staticClass: "assess-type"
  }, [_c('button', {
    staticClass: "chosetype",
    class: _vm.showType == "bad" ? "chosetype-selected" : "chosetype-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.changeType("bad")
      }
    }
  }, [_vm._v("吐槽 " + _vm._s(_vm.queryRatings('bad').length))])])])
},staticRenderFns: []}

/***/ }),
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRequest;
function getRequest() {
	//获取url中"?"符后的字串 
	let url = window.location.search
	let theRequest = new Object()
	if (url.indexOf("?") != -1) { 
		let str = url.substr(1)
		let strs = str.split("&")
		for(let singlestr of strs){
			theRequest[singlestr.split("=")[0]] = unescape(singlestr.split("=")[1])
		}
	} 
	return theRequest
} 

/***/ }),
/* 111 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
]),[38]);
//# sourceMappingURL=app.00b087444208156b3d6f.js.map