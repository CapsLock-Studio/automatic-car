var mraa = require('mraa');
var p44 = new mraa.Gpio(44);
p44.dir(mraa.DIR_OUT);
p44.write(1);
