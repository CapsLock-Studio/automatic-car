var config = require('./config.js');

module.exports = {
    left: function () {
        config.set('direction', -1);
    },
    right: function () {
        config.set('direction', 1);
    }
};
