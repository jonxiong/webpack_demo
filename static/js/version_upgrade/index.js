/**
* @file 小程序低版本升级H5提示页
* @author xiongyang(xiongyang@baidu.com)
*/
import '../../css/base.css';
import '../../css/version_upgrade.css';
let btn = document.getElementById('upgradeBtn');
let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
if (isiOS) {
    // baiduboxapp://V7/utils/openStore?appid=$appid
    btn.addEventListener('click', function () {
        let appKey = document.getElementById('appKey').getAttribute('value');
        let scheme = `baiduboxapp://V7/utils/openStore?appid=${ appKey }`;
        iosInvoke(scheme);
    });
}
else {
    // Bdbox_android_revUpdate.now(url)
    btn.addEventListener('click', function () {
        let url = document.getElementById('jumpAndUrl').getAttribute('value');
        location.href = url;
    });
}

function iosInvoke(scheme) {
    let elem = document.createElement('iframe');
    let body = document.body || document.getElementsByTagName('body')[0];
    elem.style.display = 'none';
    elem.src = scheme;
    body.appendChild(elem);
    setTimeout(function () {
        body.removeChild(elem);
        elem = null;
    }, 0);
}
