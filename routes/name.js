const nameRoutes = (app, fs) => {
    //variables
    const dataPath = './data/allcards.json';

    //READ
    app.get('/:name', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

        const name = req.params.name;
        const result = JSON.parse(data);
        const cards = result.cards;
        const matches = cards.filter(card => card.name.toLowerCase().includes(name));
        res.header("Access-Control-Allow-Origin", "*");     //* is allowing all clients to fetch
        res.status(200).json(matches);
        });
    });

};

module.exports = nameRoutes;