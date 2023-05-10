const allCardsRoutes = require('./allcards');
const nameRoutes = require('./name');

const appRouter = (app, fs) => {
app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");      //make sure to use react-app on localhost:3001 or change url here!
    //res.send('Welcome to my new Tarot API');
    res.status(200).json({
        welcome: 'Welcome to my new tarot API.',
        info: 'The API contains info about all 78 tarot cards. You can use the following endpoints to fetch data:',
        endpoints: [{'/allcards' : 'get the whole dataset with all 78 cards'}, {'/name' : 'find all cards whose name contain whatever you type as "name"'}]
    })
});

allCardsRoutes(app, fs);
nameRoutes(app, fs);
};

module.exports = appRouter;