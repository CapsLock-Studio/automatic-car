var mraa = require('mraa');

x = mraa.Pwm(10)
x.period_us(700)
x.enable(true)
value= 0.0

function run() {
    x.write(value)
    value = value + 0.01
    if (value >= 1) {
        value = 0.0
    }

    setTimeout(run, 50);
}

run();
