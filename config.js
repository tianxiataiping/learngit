var viewports = [{width:320,height:480},{width:960,height:540},{width:1920,height:1152},{width:1920,height:1080},{width:1280,height:720},{width:2560,height:1536},{width:2560,height:1440},{width:854,height:480},{width:1136,height:640},{width:1134,height:750}];
var pictures =['320.png','960.png','1920_1152.png','1920_1080.png','1280_720.png','2560_1536.png','2560_1440.png','854_480.png','1136_640.png','1134_750.png'];
var urls =['http://pub6.m.sm.cn/s?q=%E5%8C%97%E4%BA%AC&uc_param_str=dnntnwvepffrgibijbprsvdsei&nt=2&from=smor&safe=1&by=suggest&snum=6&ad=brand'];
var paths =['//*[@id="results"]/div[@class="ad-container-xc"]'];

module.exports.viewports = viewports;
module.exports.pictures = pictures;
module.exports.urls = urls;
module.exports.paths = paths;