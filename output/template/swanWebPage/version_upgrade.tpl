
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,initial-scale=1,viewport-fit=cover">
        <meta name="format-detection" content="telephone=no">
        <meta name="apple-mobile-web-app-status-bar-style" content="white">
        <meta name="apple-mobile-web-app-capable" content="no">
        <title>智能小程序</title>
        <link inline rel="stylesheet" href='/static/swanWebPage/css/version_upgrade.css'>
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

        <script inline src="/static/swanWebPage/js/version_upgrade.js"></script>
    </body>
</html>
