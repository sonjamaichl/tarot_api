const userRoutes = (app, fs) => {
    //variables
    const dataPath = './data/allcards.json';

    //READ
    app.get('/allcards', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
        res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
        res.status(200).send(JSON.parse(data));
        });
    });

};

module.exports = userRoutes;