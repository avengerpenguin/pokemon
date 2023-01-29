import {default as autoComplete} from '@tarekraafat/autocomplete.js'
const pokedex = require('./pokemon.json');
require('@tarekraafat/autocomplete.js/dist/css/autoComplete.02.css');
const md5 = require('js-md5');

const now = new Date();
const today = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()+'T'+now.getHours()+':'+now.getMinutes();

const names = Object.keys(pokedex);
const answer = pokedex[names[(parseInt(md5(today), 16) % names.length) - 1]];

function highlight(snippet, correctVersion) {
    if (Array.isArray(correctVersion)) {
        return `<span class="${correctVersion.includes(snippet) ? 'right' : 'wrong'}">${snippet}</span>`;
    } else {
        return `<span class="${snippet == correctVersion ? 'right' : 'wrong'}">${snippet}</span>`;
    }
}

function renderPokemon(guess, answer) {
    let output = highlight(guess.Name, answer.Name) + ': '

    const answerTypes = [answer.Type1, answer.Type2];
    const answerAbilities = [answer.Ability1, answer.Ability2, answer.Ability_Hidden].filter(x => !!x);

    if (guess.Type1) {
        output += highlight(guess.Type1, answerTypes);
    }
    if (guess.Type2) {
        output += ' / ' + highlight(guess.Type2, answerTypes)
    }
    if (guess.Color) {
        output += ' / ' + highlight(guess.Color, answer.Color)
    }
    if (guess.Category) {
        output += ' / ' + highlight(guess.Category, answer.Category)
    }
    if (guess.Generation) {
        output += ' / ' + highlight(`Generation ${guess.Generation}`, `Generation ${answer.Generation}`)
    }
    if (guess.Ability1) {
        output += ' / ' + highlight(guess.Ability1, answerAbilities);
    }
    if (guess.Ability2) {
        output += ' / ' + highlight(guess.Ability2, answerAbilities);
    }
    if (guess.Ability_Hidden) {
        output += ' / ' + highlight(guess.Ability_Hidden, answerAbilities);
    }
    return output;
}

const config = {
    placeHolder: "Guess a Pokemon...",
    data: {
        src: names,
    },
    resultItem: {
        highlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
                if (selection === answer.Name) {
                    document.getElementById('result').innerHTML = '<p class="right">Correct!</p>'
                    const guess = document.createElement('li')
                    guess.innerHTML = renderPokemon(pokedex[selection], answer);
                    document.getElementById('guesses').appendChild(guess)
                } else {
                    document.getElementById('result').innerHTML = '<p class="wrong">Nope!</p>'
                    const guess = document.createElement('li')
                    guess.innerHTML = renderPokemon(pokedex[selection], answer);
                    document.getElementById('guesses').appendChild(guess)
                }
            }
        }
    }
}

const autoCompleteJS = new autoComplete(config);
