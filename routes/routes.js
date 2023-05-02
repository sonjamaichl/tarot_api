const allcardsRoutes = require('./allcards');

const appRouter = (app, fs) => {
app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.send('Welcome to my new Tarot API');
});

allcardsRoutes(app, fs);
};

module.exports = appRouter;