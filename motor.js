var config = require('./config.js');
// var mraa = require('mraa');
var leftMotor;
var rightMotor;

function motor() {
    var leftPin = config.get('left');
    var rightPin = config.get('right');
    var freq = config.get('freq');
    // TODO: set your motor here

    return {
        handle: handle
    }
}

var handle = function () {
    var update = config.get('update');
    update = new Date(update);
    var date = new Date();

    if ((date - update) / 1000 > 1) {
        config.initialize();
    }

    // start get config...
    var speed = config.get('speed');
    var direction = config.get('direction');
    var status = config.get('status');
    console.log('status', speed, direction, status);
    // TODO: control your motor here
};

module.exports = motor;
