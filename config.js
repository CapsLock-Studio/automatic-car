var fs = require('fs');

var template = {
    speed: 0,
    direction: 0,
    status: 0,
    update: new Date(),
    left: 3,
    right: 4,
    freq: 500
}

module.exports = {
    initialize: function() {
        template.update = new Date();
        this.save(template);
    },
    set: function(key, value) {
        var config = this.load();
        config[key] = value;
        config.update = new Date();
        this.save(config);
    },
    get: function (key) {
        var config = this.load();
        return config[key];
    },
    load: function () {
        var config = fs.readFileSync('config.json');
        return JSON.parse(config);
    },
    save: function (json) {
        fs.writeFileSync('config.json', JSON.stringify(json));
    }
};
