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
    answerArray.push(`Your fortune is: ${fortune}`)

    return answerArray
  })
  .catch((error) => {
    return "There was an error: " + error
  })
}



function fullSession(question) {
  let answerArray = [];
  let sessionPromise = welcome()
  .then((welcomeMessage) => {
    answerArray.push(welcomeMessage)
  })
  .then(() => {
    return getFortune(question)
  })
  .then((fortuneMessage) => {
    answerArray = answerArray.concat(fortuneMessage)
  })
  .then(() => {
    return goodbye()
  })
  .then((goodbyeMessage) => {
    answerArray.push(goodbyeMessage)
  })
  .then(() => {
    return answerArray
  })
  return sessionPromise
}

module.exports = { getFortune, fullSession };
