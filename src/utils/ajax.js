function $http(opt) {
    if (!Promise) {
        console.log('有Promise');
    }
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || 'GET';
    opt.url = opt.url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    return new Promise(function (resolve, reject) {
        var xhr;
        if (XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        var params = [];
        for (var key in opt.data) {
            params.push(key + '=' + opt.data[key]);
        }
        var postData = params.join('&');
        if (opt.method.toUpperCase() === 'POST') {
            xhr.open(opt.method, opt.url, opt.async);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xhr.send(postData);
        } else if (opt.method.toUpperCase() === 'GET') {
            xhr.open(opt.method, opt.url + '?' + postData, opt.async);
            xhr.send(null);
        }
        xhr.onload = function () {
            //console.log(xhr.readyState, xhr.status)
            if (xhr.readyState === 4 && xhr.status === 200) {
                //console.log('chenggongle')
                var data = JSON.parse(xhr.responseText);
                resolve({
                    data: data,
                    status: 200
                });
            } else {
                reject({
                    message: 'error',
                    status: 0
                });
            }
        };
    });
}
export default $http;
