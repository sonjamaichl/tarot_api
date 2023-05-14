const randomRoutes = (app, fs) => {
    
    const dataPath = './data/allcards.json';

    
    app.get('/random/:n', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
        let n = req.params.n;
        //checking if client requested a valid number of random cards
        let n_ok = (n > 0 && n <= 10) ? true : false;
        const result = JSON.parse(data);
        const cards = result.cards;     //cards is an array, result is an object!
        let nRandomCards;
            if (n_ok) {
                let nRandomNums = [];
                //generating n random cards
                while (nRandomNums.length < n) {
                    let newRandomNum = Math.floor(Math.random() * 78);
                    //checking if same number already exists (if so don't push and generate another one!)
                    !nRandomNums.includes(newRandomNum) && nRandomNums.push(newRandomNum)
                }
                nRandomCards = nRandomNums.map(num => cards[num]);
            } else {
                //info to client why request failed if invalid number was requested
                nRandomCards = `Couldn't generate random cards. ${n} is not a valid number. This endpoint only accepts integer values between 1 and 10. Try again with a valid number.`
            }
        
        //const randomCard = cards[randomNum];
        res.header("Access-Control-Allow-Origin", "*");     //* is allowing all clients to fetch
        res.status(200).json(nRandomCards);
        });
    });

};

module.exports = randomRoutes;