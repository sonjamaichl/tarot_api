const randomRoutes = (app, fs) => {
    
    const dataPath = './data/allcards.json';

    
    app.get('/cards/random', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

        const result = JSON.parse(data);
        //create a random number between 0 and 77
        const randomNum = Math.floor(Math.random()*78);
        //console.log(randomNum);
        const cards = result.cards;     //cards is an array, result is an object!
        const randomCard = cards[randomNum];
        res.header("Access-Control-Allow-Origin", "*");     //* is allowing all clients to fetch
        res.status(200).json(randomCard);
        });
    });

};

module.exports = randomRoutes;