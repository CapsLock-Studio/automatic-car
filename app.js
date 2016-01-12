var config = require('./application/config.js');
config.initialize();

var mcs = require('mcsjs');
var direction = require('./application/direction.js');
var speed = require('./application/speed.js');
var motor = require('./application/motor.js')();


var app = mcs.register({
	deviceId: 'DstxO0B0',
	deviceKey: 'uxCI414r3GjTpqa7',
});

function refresh() {
	motor.handle();
	setTimeout(refresh, 50);
}

app.on('gamepad', function(data, time) {
	var slice = data.split('|');
	var attribute = slice[0];
	var value = slice[1];
	if (value == '1') {
		switch (attribute) {
			case 'up':
				speed.up();
				break;
			case 'down':
				speed.down();
				break;
			case 'right':
				direction.right();
				break;
			case 'left':
				direction.left();
				break;
			case 'a':
				speed.stop();
				break;
			case 'b':
				break;
		}
	}
});

refresh();
