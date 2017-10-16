export function getRequest() {
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