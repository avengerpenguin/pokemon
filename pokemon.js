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

export default renderPokemon;
