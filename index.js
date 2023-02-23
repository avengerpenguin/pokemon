import { default as autoComplete } from "@tarekraafat/autocomplete.js";
import { default as renderPokemon } from "./pokemon.js";
require("@tarekraafat/autocomplete.js/dist/css/autoComplete.02.css");
const md5 = require("js-md5");

const params = new URLSearchParams(window.location.search);
const gens = params.getAll("gen");

if (gens.length > 0) {
  const now = new Date();
  const today =
    now.getUTCFullYear() +
    "-" +
    (now.getUTCMonth() + 1) +
    "-" +
    now.getUTCDate() +
    " " +
    now.getUTCHours() +
    ":" +
    now.getUTCMinutes();

  document.getElementsByTagName("main")[0].innerHTML = `
      <p><em>Using generations: ${gens.join(
        ", "
      )} -- <a href="/">Choose different generations</a>.</em></p>
      <div id="result"></div>
      <input id="autoComplete" />
      <ul id="guesses"></ul>
      <small>${today}</small>
    `;

  // Load individually to allow webpack to split the bundle
  const pokedex = {};
  if (gens.includes("1")) {
    Object.assign(pokedex, await import("./pokemon-1.json"));
  }
  if (gens.includes("2")) {
    Object.assign(pokedex, await import("./pokemon-2.json"));
  }
  if (gens.includes("3")) {
    Object.assign(pokedex, await import("./pokemon-3.json"));
  }
  if (gens.includes("4")) {
    Object.assign(pokedex, await import("./pokemon-4.json"));
  }
  if (gens.includes("5")) {
    Object.assign(pokedex, await import("./pokemon-5.json"));
  }
  if (gens.includes("6")) {
    Object.assign(pokedex, await import("./pokemon-6.json"));
  }
  if (gens.includes("7")) {
    Object.assign(pokedex, await import("./pokemon-7.json"));
  }
  if (gens.includes("8")) {
    Object.assign(pokedex, await import("./pokemon-8.json"));
  }
  if (gens.includes("9")) {
    Object.assign(pokedex, await import("./pokemon-9.json"));
  }

  const names = Object.keys(pokedex);
  const answer =
    pokedex[names[parseInt(md5(today).substring(0, 10), 16) % names.length]];

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
          autoCompleteJS.data.src = autoCompleteJS.data.src.filter(
            (x) => x !== selection
          );
          autoCompleteJS.input.value = "";
          autoCompleteJS.input.focus();
        },
      },
    },
  };

  const autoCompleteJS = new autoComplete(config);
  autoCompleteJS.input.focus();
} else {
  document.getElementsByTagName("main")[0].innerHTML = `
    <h2>Select Generations</h2>
    <form>
        <input type="checkbox" name="gen" value="1"/>I<br>
        <input type="checkbox" name="gen" value="2"/>II<br>
        <input type="checkbox" name="gen" value="3"/>III<br>
        <input type="checkbox" name="gen" value="4"/>IV<br>
        <input type="checkbox" name="gen" value="5"/>V<br>
        <input type="checkbox" name="gen" value="6"/>VI<br>
        <input type="checkbox" name="gen" value="7"/>VII<br>
        <input type="checkbox" name="gen" value="8"/>VIII<br>
        <input type="checkbox" name="gen" value="9"/>IX<br>
        <input type="submit" value="Let's go!"/>
    </form>
    `;
}
