var config =require('./config.js');
var casper = require('casper').create(
	{
	pageSettings:{
	userAgent:"Mozilla/5.0 (Linux; U; Android 4.4.4; zh-CN; MI 4LTE Build/KTU84P) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.9.5.489 U3/0.8.0 Mobile Safari/533.1"
	},
	viewportsize:config.viewports[0],
	verbose:true,
	logLevel:"debug"
});

casper.start();
casper.thenOpen(config.urls[0]);
casper.wait(1000,function(){
	    var x = 0;
		while (this.exists({
		type:'xpath',
		path:config.paths[0]
		//path:'//*[@id="results"]/div[@class="ad-container-xc"]'
	})==false && x<=30)
		{
		this.reload();
		x++;} 
		
    	this.capture(config.pictures[0]);
    	
});

casper.run();
	

