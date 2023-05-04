const allcardsRoutes = require('./allcards');

const appRouter = (app, fs) => {
app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");      //make sure to use react-app on localhost:3001 or change url here!
    res.send('Welcome to my new Tarot API');
});

allcardsRoutes(app, fs);
};

module.exports = appRouter;