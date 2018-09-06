var ua = navigator.userAgent.toLowerCase();
var isChrome = {condition:((ua.indexOf('chrome') != -1)), mex:'This is Chrome',src: 'temp/scripts/js/main.js',href:'temp/styles/style.css'};
var isSafari = {condition: ((ua.indexOf('safari') != -1) && (ua.indexOf('chrome')  == -1)), mex:'This is Safari'};
var isFirefox = {condition:((ua.indexOf('firefox') != -1)), mex:'This is Firefox',src: 'temp/scripts/js/main.js',href:'temp/styles/style.css'};
var isOpera = {condition:((ua.indexOf('opera') != -1) && (ua.indexOf('chrome')  == -1)), mex:'This is Opera'};
var isExplorer = {condition:((ua.indexOf('MSIE') != -1) || (ua.indexOf('trident')  != -1)), mex:'This is Explorer',src: 'temp/scripts/js/main.js',href:'temp/styles/css/ie.css'};
var browsers = [isChrome, isSafari, isFirefox, isOpera, isExplorer];
var thisBrowser;
browsers.forEach(function(browser){
    if(browser.condition){
        thisBrowser = browser;
        return;
    }
});
var head = document.querySelector('head');
var script = document.createElement('script');
var link =document.createElement('link');
script.src = thisBrowser.src;
script.type = 'text/javascript';
var body = document.querySelector('body');
body.appendChild(script);
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = thisBrowser.href;
head.appendChild(link);
console.log(browsers);
