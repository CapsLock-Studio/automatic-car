var config = require('./config.js');

module.exports = {
    up: function () {
        // TODO: impl here
    },
    down: function () {
        // TODO: impl here
    },
    brake = function() {
        config.set('direction', 0);
        config.set('speed', 0);
    }
};
