
const userCode = `
function add(a, b) {
  if (asdasda = asdasdasasd) {
    for{asdasdasdads}(asdjjasd
        log {asdasasdd}
    )
  }
}
`

    // const functionBody = userCode.split('{')[1];
    // console.log(functionBody);

function removeFirstAndLastBrackets(input) {
  const firstBracketIndex = input.indexOf('{');
  const lastBracketIndex = input.lastIndexOf('}');

  if (firstBracketIndex !== -1 && lastBracketIndex !== -1) {
    const newInput = input.slice(firstBracketIndex + 1, lastBracketIndex);
    console.log(newInput);
  } else {
    console.log('No brackets found');
  }
}

removeFirstAndLastBrackets(userCode);