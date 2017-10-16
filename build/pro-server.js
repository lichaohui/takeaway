require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.build.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.build.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.build.proxyTable

var app = express()

//引入数据源文件
var appdata=require('../data.json')

//路由
var router=express.Router()

/*router.get('/',(req,res,next)=>{
	req.url = '../dist'
})*/

//获取商家数据的路由
router.get('/seller',(req,res)=>{
	//商家数据
  let seller=appdata.seller
	//返回json数据
	res.json({
		//是否成功的标识
		isSuccess:true,
		//返回的具体数据
		data:seller
	})
})

//获取商品数据的路由
router.get('/goods',(req,res)=>{
	//商品数据
  let goods=appdata.goods
	//返回json数据
	res.json({
		//是否成功的标识
		isSuccess:true,
		//返回的具体数据
		data:goods
	})
})

//获取商家数据的路由
router.get('/ratings',(req,res)=>{
	//评论数据
  let ratings=appdata.ratings
	//返回json数据
	res.json({
		//是否成功的标识
		isSuccess:true,
		//返回的具体数据
		data:ratings
	})
})

//使用路由
app.use('/api',router)

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
