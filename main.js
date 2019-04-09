


// create arrays for topics
let currentMovies = ['us','shazam','dumbo','captain marvel','pet sematary',
                'the public','wonder park'];

let topAnime = ['the promised neverland', 'one punch man', 'dororo','mob psycho',
                'demon slayer', 'fullmetal alchemist','steins gate' ];


let htmlWords = ['head','title','body','doctype','tag','href','src'];

let cssWords = ['selector','property','id','class','color','flexbox','border'];

let jsWords = ['innerhtml','getelementsbyid','document','let','function','object',
            'array'];

let jqueryWords = ['click','fadein','fadeout','slidedown','callback','chaining','addclass'];

function createGame()
{
    let chosenTopic = prompt('Please enter a number from 1 - 6 to choose a topic.' 
                        + '\n1. HTML'
                        + '\n2. CSS'
                        + '\n3. JS'
                        + '\n4. Jquery'
                        + '\n5. Current Movies'
                        + '\n6. Top Anime');


    console.log(chosenTopic);
}

createGame();