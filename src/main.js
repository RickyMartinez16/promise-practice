const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
  return tell(question).then((response) => [
    `Your question was: ${question}`,
    `Your fortune is: ${response}`,
  ]);
}

function getFortune(question) {
  const answerArray = [];
  return tell(question)
  .then((fortune) => {
    answerArray.push(`Your question was: ${question}`)
    answerArray.push(`Your fortune is: ${response}`)

    return answerArray
  })
  .catch((error) => {
    return "There was an error: " + error
  })
}



function fullSession(question) {}

module.exports = { getFortune, fullSession };
