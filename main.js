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



let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                't','u','v','w','x','y','z'];

let imgArr = new Array();
imgArr[0] = new Image(550,350);
imgArr[0].src = 'images/hangman1.png';

imgArr[1] = new Image();
imgArr[1].src = 'images/hangman2.png';

imgArr[2] = new Image();
imgArr[2].src = 'images/hangman3.png';

imgArr[3] = new Image();
imgArr[3].src = 'images/hangman4.png';

imgArr[4] = new Image();
imgArr[4].src = 'images/hangman5.png';

imgArr[5] = new Image();
imgArr[5].src = 'images/hangman6.png';

imgArr[6] = new Image();
imgArr[6].src = 'images/hangman7.png';





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
    life = 0;
    guessArr = [];
    wrongGuess = [];

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


function checkGuess(word, letter)
{
    
    if(lettersLeft > 0){
        for(j = 0; j < word.length; j++)
        {
                
            if(letter !== word[j] && !wrongGuess.includes(letter))
            {
                wrongGuess.push(letter);         
                life++;
                updateImg(life);
                if(life === 6)
                    gameLose();
            }
            else if(letter === word[j] )
            {
                guessArr[j] = letter;
                lettersLeft--;
                updateDisplay();
                if(guessArr.join('') === word)
                    gameWin();
                
                    
            }

           
                
        }  
        console.log(life);   
    }
        
}

function updateImg(num)
{
    $('.game').empty();
    $('.game').append(imgArr[num]);
}

//update display
function updateDisplay()
{
    $('#blanks').empty();
    $('#blanks').append(guessArr);

}


//function for winning a game 
function gameWin()
{
    alert('Congratulations, you won');
    $('#blanks').empty();
    let tryAgain = prompt('Try again?');
    if(tryAgain === 'y' || tryAgain === 'yes')
    {
        
        createGame();
    }
    else{
        window.close();
    }
}

//function for losing a game
function gameLose()
{
    let tryAgain = prompt('Sorry you ran out of lives, try again?').toLowerCase();
    $('#blanks').empty();

    if(tryAgain === 'y' || tryAgain === 'yes')
    {
       
        createGame();
    }
    else{
        window.close();
    }
}



$(function()
{
    createGame();
    $('.game').append(imgArr[0]);

});






$('#a').on('click',function()
{
    checkGuess(hiddenWord,'a');
    //https://api.jquery.com/prop/
    $(this).prop('disabled', true);
});

$('#b').on('click',function()
{
    checkGuess(hiddenWord,'b');
    $(this).prop('disabled', true);
});

$('#c').on('click',function()
{
    checkGuess(hiddenWord,'c');
    $(this).prop('disabled', true);
});

$('#d').on('click',function()
{
    checkGuess(hiddenWord,'d');
    $(this).prop('disabled', true);
});

$('#e').on('click',function()
{
    checkGuess(hiddenWord,'e');
    $(this).prop('disabled', true);
});

$('#f').on('click',function()
{
    checkGuess(hiddenWord,'f');
    $(this).prop('disabled', true);
});

$('#g').on('click',function()
{
    checkGuess(hiddenWord,'g');
    $(this).prop('disabled', true);
});

$('#h').on('click',function()
{
    checkGuess(hiddenWord,'h');
    $(this).prop('disabled', true);
});

$('#i').on('click',function()
{
    checkGuess(hiddenWord,'i');
    $(this).prop('disabled', true);
});

$('#j').on('click',function()
{
    checkGuess(hiddenWord,'j');
    $(this).prop('disabled', true);
});

$('#k').on('click',function()
{
    checkGuess(hiddenWord,'k');
    $(this).prop('disabled', true);
});

$('#l').on('click',function()
{
    checkGuess(hiddenWord,'l');
    $(this).prop('disabled', true);
});

$('#m').on('click',function()
{
    checkGuess(hiddenWord,'m');
    $(this).prop('disabled', true);
});

$('#n').on('click',function()
{
    checkGuess(hiddenWord,'n');
    $(this).prop('disabled', true);
});

$('#o').on('click',function()
{
    checkGuess(hiddenWord,'o');
    $(this).prop('disabled', true);
});

$('#p').on('click',function()
{
    checkGuess(hiddenWord,'p');
    $(this).prop('disabled', true);
});

$('#q').on('click',function()
{
    checkGuess(hiddenWord,'q');
    $(this).prop('disabled', true);
});

$('#r').on('click',function()
{
    checkGuess(hiddenWord,'r');
    $(this).prop('disabled', true);
});

$('#s').on('click',function()
{
    checkGuess(hiddenWord,'s');
    $(this).prop('disabled', true);
});

$('#t').on('click',function()
{
    checkGuess(hiddenWord,'t');
    $(this).prop('disabled', true);
});

$('#u').on('click',function()
{
    checkGuess(hiddenWord,'u');
    $(this).prop('disabled', true);
});

$('#v').on('click',function()
{
    checkGuess(hiddenWord,'v');
    $(this).prop('disabled', true);
});

$('#w').on('click',function()
{
    checkGuess(hiddenWord,'w');
    $(this).prop('disabled', true);
});

$('#x').on('click',function()
{
    checkGuess(hiddenWord,'x');
    $(this).prop('disabled', true);
});

$('#y').on('click',function()
{
    checkGuess(hiddenWord,'y');
    $(this).prop('disabled', true);
});

$('#z').on('click',function()
{
    checkGuess(hiddenWord,'z');
    $(this).prop('disabled', true);
});