module.exports = function(app){
    var index = require('../controllers/index.server.controller');
    var player = require('../controllers/player.server.controller');
    app.get('/', index.render);
    app.get('/player', player.render);
};
