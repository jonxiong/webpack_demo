/**
 * @file Describe the file
 */

fis.set('PRODUCT_NAME', 'iknow');
fis.set('APP_NAME', 'ma-srvpub');

fis.match('**', {
    useCompile: false,
    release: false
});

fis.media('rd').match('**', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://bjyz-rdqa-dev058-liangyuanzheng.epc.baidu.com:8080/receiver.php',
        to: '/home/users/liangyuanzheng/GoWorkspace/src/icode.baidu.com/baidu/searchbox'
    })
});

// 有需要的话在加文件 or 目录
fis.match('{/{conf,cron,conf_liangyuanzheng,conf_liangyuanzheng_dev058,global,library,controllers,middlewares,models,routers,script,shared,view,vender}/**,*.go, *.sh}', {
    release: '${APP_NAME}/$0'
});