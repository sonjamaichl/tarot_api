

async function getData(){
    let url = 'http://localhost:3000/allcards';
    console.log('fetching now...');
    response = await fetch(url);
    console.log(response);
    result = await response.json();
    console.log(result);
    showCardsList(result);
    console.log('Your card:')
    console.log(result.cards[getReading()].name);
    return result;
}

function showCardsList(data) {
    for (let i = 0; i < data.cards.length; i++) {
        console.log(result.cards[i].name);
        let pTag = document.createElement('p');
        pTag.innerText = `${data.cards[i].name}: ${data.cards[i].keywords}`;
        document.getElementById('resultsList').appendChild(pTag);
    }
}

getData();

function getReading(){
    let randomNum = Math.floor(Math.random()*78);   // 78 cards => creating a random number between 0 and 77
    console.log(randomNum);
    return randomNum;
}

getReading(getData);