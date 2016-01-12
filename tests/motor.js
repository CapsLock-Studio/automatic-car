var mraa = require('mraa');

var x = mraa.Pwm(10)
x.period_us(700)
x.enable(true)
var value= 0.0

function run() {
    x.write(value)
    value = value + 0.01
    if (value >= 1) {
        value = 0.0
    }

    setTimeout(run, 50);
}

run();
