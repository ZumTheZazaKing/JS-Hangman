let modal = document.getElementById('modal');

let image = document.getElementById('imageSecond');

let message = document.getElementById('message');

let wordSpace = document.getElementById('wordSpace');

let words = [
    'abduction',
    'abridgment',
    'admixtures',
    'afterglow',
    'aftershock',
    'algorithms',
    'amplitude',
    'anchorites',
    'angiosperm',
    'angleworm',
    'artichokes',
    'birthplace',
    'bivouacked',
    'blacksmith',
    'blackthorn',
    'blockading',
    'blockheads',
    'blueprint',
    'depilatory',
    'exhaustion',
    'exhumation',
    'faltering',
    'farsighted',
    'goldbricks',
    'graciously',
    'greyhounds',
    'grievously',
    'monarchies',
    'monarchist',
    'monetarily',
    'motherland',
    'noticeably',
    'obdurately',
    'obfuscated',
    'thumbnail',
    'thumbscrew',
    'timberland',
    'touchingly',
    'wingspread',
    'womanizer',
    'womanliest',
    'workplace',
    'worshipful'
];

let wordPicker = Math.floor(Math.random()*Math.floor(words.length));

let chosenWord = words[wordPicker];

let correct = 0;

let correctLength = chosenWord.length;

let lives = 10;

let livesCount = document.getElementById('count');

livesCount.innerHTML = lives;





for(var i = 0; i < chosenWord.length; i++){

    let letterContainer = document.createElement('button');

    let letter = document.createElement('span');

    letter.style.visibility = 'hidden';

    letter.setAttribute('id',[i]);

    let letterText = document.createTextNode(chosenWord[i]);

    letter.appendChild(letterText);

    letterContainer.appendChild(letter)

    wordSpace.appendChild(letterContainer);

}


function guess(event){

    let userGuess = event.key;

    if (chosenWord.includes(userGuess)){

        let letterToBeRevealedIndex = chosenWord.indexOf(userGuess);

        let letterToBeRevealed = document.getElementById(letterToBeRevealedIndex);

        if(letterToBeRevealed.style.visibility == 'hidden'){

            letterToBeRevealed.style.visibility = 'visible';

            correct++;

        } else if (letterToBeRevealed.style.visibility == 'visible'){

            return;

        }  
        
        if (correct == correctLength){

            modal.style.display = 'block';

            message.style.color = 'green';

            image.src = 'thumbs up emoji.png';

            message.innerHTML = 'Congratulations! You got the word!<br><br>It was ' + "'" + chosenWord + "'";

        }


    } else {

        lives--;

        livesCount.innerHTML = lives;

        if (lives == 0){

            modal.style.display = 'block';

            message.style.color = 'red';

            image.src = 'skull emoji.png';

            message.innerHTML = 'Oh no! Death was inevitable<br><br>The word was ' + "'" + chosenWord + "'";

        }

    }

}

function reload(){

    window.location.reload();

}

function getAnotherWord(){

    alert('Word has been changed');

    window.location.reload();

}

