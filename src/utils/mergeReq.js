import $http from './ajax.js';

console.log($http);
var mergeReq = function () {
    var reqTeam = [];
    for (var i = arguments.length; i < 10; i++) {
        reqTeam.push(arguments[i]);
    }
};

export default mergeReq;
