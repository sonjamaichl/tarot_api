const allCardsRoutes = (app, fs) => {
    //variables
    const dataPath = './data/allcards.json';

    //READ
    app.get('/allcards', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
        res.header("Access-Control-Allow-Origin", "*");     //make sure to use react-app on localhost:3001 or change url here!
        res.status(200).send(JSON.parse(data));
        });
    });

};

module.exports = allCardsRoutes;