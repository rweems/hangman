


// create arrays for topics
let htmlWords = ['head','title','body','doctype','tag','href','src'];

let cssWords = ['selector','property','id','class','color','flexbox','border'];

let jsWords = ['innerhtml','getelementsbyid','document','let','function','object',
            'array'];

let jqueryWords = ['click','fadein','fadeout','slidedown','callback','chaining','addclass'];

let currentMovies = ['us','shazam','dumbo','captain marvel','pet sematary',
                'the public','wonder park'];

 topAnime = ['the promised neverland', 'one punch man', 'dororo','mob psycho',
                'demon slayer', 'fullmetal alchemist','steins gate' ];



function createGame()
{
    
    let chosenTopic = prompt('Please enter a number from 1 - 6 to choose a topic.' 
                        + '\n1. HTML'
                        + '\n2. CSS'
                        + '\n3. JS'
                        + '\n4. Jquery'
                        + '\n5. Current Movies'
                        + '\n6. Top Anime');

    switch(chosenTopic)
    {
        case '1':
            randomWord(htmlWords);
            break;
        case '2':
            randomWord(cssWords);
            break;
        case '3':
            randomWord(jsWords);
            break;
        case '4': 
            randomWord(jqueryWords);
            break;
        case '5':
            randomWord(currentMovies);
            break;
        case '6':
            randomWord(topAnime);
            break;
        default:
            return 'sorry try again';
    }

}

function randomWord(topicArray)
{
    

    //https://css-tricks.com/snippets/javascript/select-random-item-array/
    let hiddenWord = topicArray[Math.floor(Math.random() * topicArray.length)];
    console.log(hiddenWord);
}



createGame();