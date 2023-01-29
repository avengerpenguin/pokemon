import { default as autoComplete } from "@tarekraafat/autocomplete.js";
require("@tarekraafat/autocomplete.js/dist/css/autoComplete.02.css");
const md5 = require("js-md5");

const now = new Date();
const today =
  now.getUTCFullYear() +
  "-" +
  (now.getUTCMonth() + 1) +
  "-" +
  now.getUTCDate() +
  "T" +
  now.getUTCHours() +
  ":" +
  now.getUTCMinutes();

// Load individually to allow webpack to split the bundle
const pokedex = {};
Object.assign(pokedex, await import("./pokemon-1.json"));
Object.assign(pokedex, await import("./pokemon-2.json"));
Object.assign(pokedex, await import("./pokemon-3.json"));
Object.assign(pokedex, await import("./pokemon-4.json"));
Object.assign(pokedex, await import("./pokemon-5.json"));
Object.assign(pokedex, await import("./pokemon-6.json"));
Object.assign(pokedex, await import("./pokemon-7.json"));
Object.assign(pokedex, await import("./pokemon-8.json"));
Object.assign(pokedex, await import("./pokemon-9.json"));

const names = Object.keys(pokedex);
const answer = pokedex[names[(parseInt(md5(today), 16) % names.length) - 1]];

function highlight(snippet, correctVersion) {
  if (Array.isArray(correctVersion)) {
    return `<span class="${
      correctVersion.includes(snippet) ? "right" : "wrong"
    }">${snippet}</span>`;
  } else {
    return `<span class="${
      snippet == correctVersion ? "right" : "wrong"
    }">${snippet}</span>`;
  }
}

function renderPokemon(guess, answer) {
  let output =
    "<h2>" + highlight(guess.Name, answer.Name) + "</h2><p>Types/Category: ";

  const answerTypes = [answer.Type1, answer.Type2];
  const answerAbilities = [
    answer.Ability1,
    answer.Ability2,
    answer.Ability_Hidden,
  ].filter((x) => !!x);

  if (guess.Type1) {
    output += highlight(guess.Type1, answerTypes);
  }
  if (guess.Type2) {
    output += ",  " + highlight(guess.Type2, answerTypes);
  }
  if (guess.Category) {
    output += ", " + highlight(guess.Category, answer.Category);
  }
  if (guess.Color) {
    output += "</p><p>Colour: " + highlight(guess.Color, answer.Color);
  }
  if (guess.Generation) {
    output +=
      "</p><p>Generation: " + highlight(guess.Generation, answer.Generation);
  }
  if (guess.Ability1) {
    output += "<p>Abilities: " + highlight(guess.Ability1, answerAbilities);
  }
  if (guess.Ability2) {
    output += ", " + highlight(guess.Ability2, answerAbilities);
  }
  if (guess.Ability_Hidden) {
    output += ", " + highlight(guess.Ability_Hidden, answerAbilities);
  }
  return output + "</p>";
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
        if (selection === answer.Name) {
          document.getElementById(
            "result"
          ).innerHTML = `<p class="right">${pokedex[selection].Name} is correct!</p>`;
        } else {
          document.getElementById(
            "result"
          ).innerHTML = `<p class="wrong">Not a ${pokedex[selection].Name}!</p>`;
        }
        const guess = document.createElement("li");
        guess.innerHTML =
          `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedex[selection].No}.png">` +
          renderPokemon(pokedex[selection], answer);
        document
          .getElementById("guesses")
          .insertBefore(guess, document.getElementById("guesses").firstChild);
        autoCompleteJS.input.value = "";
        autoCompleteJS.input.focus();
      },
    },
  },
};

const autoCompleteJS = new autoComplete(config);
autoCompleteJS.input.focus();
