
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,initial-scale=1,viewport-fit=cover">
        <meta name="format-detection" content="telephone=no">
        <meta name="apple-mobile-web-app-status-bar-style" content="white">
        <meta name="apple-mobile-web-app-capable" content="no">
        <title>智能小程序</title>
        <style>abbr,address,article,aside,audio,b,blockquote,body,canvas,caption,cite,code,dd,del,details,dfn,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,p,pre,q,samp,section,small,span,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,ul,var,video{margin:0;padding:0;border:0;outline:0;vertical-align:baseline;background:0 0}body{line-height:1;background:#f5f5f5;font-family:-apple-system-font,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif}:focus{outline:1}article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary{display:block}nav ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}a,hr{border:0;padding:0}a{vertical-align:baseline;background:0 0;margin:0}a:hover{-webkit-tap-highlight-color:transparent}ins,mark{background-color:#ff9;color:#000}ins{text-decoration:none}mark{font-style:italic;font-weight:700}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted #000;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{display:block;height:1px;border-top:1px solid #ccc;margin:1em 0}input,select{vertical-align:middle}html{font-size:100px}@media screen and (max-width:360px){html{font-size:90px}}.wrap,body,html{height:100%;background:#fff;-webkit-tap-highlight-color:transparent}.upgrade-head{position:relative;z-index:800;overflow:hidden;box-sizing:border-box;width:100%;border-bottom:1px solid #cbcbcb;font-size:.18rem;font-weight:700;text-align:center;vertical-align:middle;color:#000;background:#fff}.upgrade-back,.upgrade-head{height:44px;line-height:44px}.upgrade-back{display:inline-block;float:left}.version-upgrade-wrap{position:relative;width:100%;height:100%;font-size:.12rem;background:url(https://b.bdstatic.com/searchbox/image/cmsuploader/20180614/1528964255860243.png) no-repeat;background-position:center 44px;background-size:100% auto}.upgrade-con{height:90%;min-height:520px;position:relative;width:100%}.upgrade-logo,.upgrade-logo img{border-radius:100%;background-size:100%}.upgrade-logo{width:100%;top:0;position:relative;height:1.9rem}.upgrade-logo img{position:absolute;bottom:0;left:50%;width:.74rem;height:.74rem;transform:translateX(-50%)}.upgrade-tit{width:100%;margin-top:.12rem;font-size:.14rem;line-height:.14rem;text-align:center;color:#333}.upgrade-text{position:relative;left:50%;width:40%;margin-top:30px;margin-left:-20%;font-size:20px;color:#000}.upgrade-con .upgrade-btn{position:absolute;bottom:1.11rem;left:50%;width:2.74rem;height:40px;margin-left:-1.37rem;font-size:.18rem;line-height:40px;text-align:center;color:#fff;border-radius:20px;background:#38f;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none}@media (device-height:568px) and (-webkit-min-device-pixel-ratio:2){.upgrade-logo{height:1.8rem}}</style>
    </head>
    <body>
        <div class="wrap" id="page_wrapper">
            <div class="version-upgrade-wrap">
                <div class="upgrade-head">智能小程序</div>
                <div class="upgrade-con">
                    <div class="upgrade-logo">
                        <img src="{{.iconURL}}" alt="">
                    </div>
                        <div class="upgrade-tit">{{.appName}}</div>
                    <div class="upgrade-btn" id="upgradeBtn">立即升级</div>
                </div>
            </div>
        </div> 
        <input type="hidden" name="app_key" id="appKey" value="{{.appKey}}">
        <input type="hidden" name="jump_url" id="jumpAndUrl" value="{{.jumpURL}}">
        <input type="hidden" name="jump_url" id="jumpIosUrl" value="{{.jumpIosURL}}">

        <script>!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=4)}([,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t),n(3),n(1);var r=document.getElementById("upgradeBtn");navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?r.addEventListener("click",function(){var e,t,n;e="baiduboxapp://V7/utils/openStore?appid="+document.getElementById("appKey").getAttribute("value"),t=document.createElement("iframe"),n=document.body||document.getElementsByTagName("body")[0],t.style.display="none",t.src=e,n.appendChild(t),setTimeout(function(){n.removeChild(t),t=null},0)}):r.addEventListener("click",function(){var e=document.getElementById("jumpAndUrl").getAttribute("value");location.href=e})}]);</script>
    </body>
</html>
