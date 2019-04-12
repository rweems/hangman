


// create arrays for topics
let htmlWords = ['head','title','body','doctype','tag','href','src'];

let cssWords = ['selector','property','id','class','color','flexbox','border'];

let jsWords = ['innerhtml','getelementsbyid','document','let','function','object',
                'array'];

let jqueryWords = ['click','fadein','fadeout','slidedown','callback','chaining','addclass'];

let currentMovies = ['us','shazam','dumbo','captain marvel','pet sematary',
                    'the public','wonder park'];

let topAnime = ['the promised neverland', 'one punch man', 'dororo','mob psycho',
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
    hiddenWord = topicArray[Math.floor(Math.random() * topicArray.length)];
    console.log(hiddenWord);
    startGame(hiddenWord);
}

function startGame(wordToGuess)
{
    lettersLeft = wordToGuess.length;
    life = 6;
    guessArr = [];
    wrongGuess = [];
    alreadyGuessed = [];

    for(i = 0; i < wordToGuess.length; i++)
    {
        if(wordToGuess[i] === ' ')
            guessArr.push(' ');
        else
            guessArr.push('_ ');
    }

    console.log(guessArr);
    $('#blanks').append(guessArr);
}


function checkGuess(word)
{

    
    
    if(alreadyGuessed.includes(userGuess())){
        alert('Letter has already been selected, pick a new letter');
    }
    else if(!isNaN(userGuess()))
    {
        alert('Please enter a letter');
    }
    else{
        
        if(lettersLeft > 0){
            for(j = 0; j < word.length; j++)
            {
                
                if(userGuess() === word[j] )
                {
                    guessArr[j] = userGuess();
                    
                    lettersLeft--;
                    update();
                    
                }
            }
            
            console.log(guessArr);
            console.log(lettersLeft);
            console.log(life);
            
        }

        if(guessArr === word)
        {
            gameWin();
        }
        else if(life === 0)
        {
          gameLose();
        }
        
    }
    
    
}

function update()
{
    $('#blanks').empty();
    $('#blanks').append(guessArr);
    document.getElementById('guessText').value = '';
}

function gameWin()
{
    alert('Congratulations, you won');
    let tryAgain = prompt('Try again?');
    if(tryAgain === 'y' || tryAgain === 'yes')
    {
        createGame();
    }
    else{
        window.close();
    }
}

function gameLose()
{
    let tryAgain = prompt('Sorry you ran out of lives, try again?');
    if(tryAgain === 'y' || tryAgain === 'yes')
    {
        createGame();
    }
    else{
        window.close();
    }
}

const userGuess = () => {return $('#guessText').val();}

$(function()
{
    
    
    $('#enterGuess').on('click',function(){
        
        checkGuess(hiddenWord);
        
    });

    createGame();
});

