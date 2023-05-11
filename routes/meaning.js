const meaningRoutes = (app, fs) => {
    //variables
    const dataPath = './data/allcards.json';

    //READ
    app.get('/meaning/:keyword', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
        //SEARCH FOR MATCHES AND STORE THEM IN NEW ARRAY
        const keyword = req.params.keyword;
        const result = JSON.parse(data);
        const cards = result.cards;
        const matches = cards.filter(card => card.keywords.includes(keyword) || card.meanings.light.toString().toLowerCase().includes(keyword) || card.meanings.shadow.toString().toLowerCase().includes(keyword));
        //SEND RESPONSE BACK TO CLIENT
        res.header("Access-Control-Allow-Origin", "*");     //* is allowing all clients to fetch
        res.status(200).json(matches);
        });
    });

};

module.exports = meaningRoutes;