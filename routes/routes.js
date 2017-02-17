module.exports = function(express, app) {
    var router = express.Router();

    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Welcome to Chat App' });
    })

    router.get('/chatrooms', function(req, res, next) {
        res.render('chatrooms', { title: 'Chatrooms' });
    })

    app.use('/', router);
}