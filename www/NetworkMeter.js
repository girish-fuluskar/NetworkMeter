var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'NetworkMeter', 'coolMethod', [arg0]);
};

module.exports.initiateDownload = function(success, error){
    exec(success, error, 'NetworkMeter', 'initiateDownload');
}

module.exports.getBitmapFromString = function(success, error){
    exec(success, error, 'NetworkMeter', 'getBitmapFromString');
}


