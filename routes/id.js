const idRoutes = (app, fs) => {
    //variables
    const dataPath = './data/allcards.json';

    //READ
    app.get('/id/:id', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
        //SEARCH FOr MATCHES AND STORE THEM IN NEW ARRAY
        const id = req.params.id;
        const result = JSON.parse(data);
        const cards = result.cards;
        const match = cards.filter(card => card.id === id)[0];  //index zero because filter method will return an array with one object inside and we don't want to send that, we only need the single card object!
        //SEND RESPONSE BACK TO CLIENT
        res.header("Access-Control-Allow-Origin", "*");     //* is allowing all clients to fetch
        res.status(200).json(match);
        });
    });

};

module.exports = idRoutes;