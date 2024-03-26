function scrabble(word) {
  console.log("hello, this is the container")

  if (typeof word !== "string" || word === null || word === undefined || word.length === 0 || !!word.match(/[^A-Za-z\[\]\{\}]/g)) return 0

  const charValue = {
    A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4, I:1, J:8, K:5, L:1, M:3, N:1, O:1, P:3, Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8, Y:4, Z:10
  }

  const charFactor = {
    current: 1,
    valid: true
  }


  charFactorChangeTrigger = (char) => {
    if (!!char.match(/[\[\]\{\}]/)) {
      switch (char) {
        case "{":
          updateCharFactor(2)
          break;
        case "[":
          updateCharFactor(3)
          break;
        case "}":
          updateCharFactor(1/2)
          break;
        case "]":
          updateCharFactor(1/3)
          break;
      }
    }
    return 0 // this is just so it will do its thing but doesn't affect the addition
  }

  updateCharFactor = (newFactor) => {
    if (charFactor.current * newFactor >= 1) {
      charFactor.previous = charFactor.current;
      charFactor.current *= newFactor
    } else {
      charFactor.valid = false
    }
  }

  getValue = (char) => (!!char.match(/[^A-Za-z]/) ? 0 : charValue[char.toUpperCase()])

  let wordValue = 0
  word.length > 0 ? charArr = word.split("") : wordValue = 0

  charArr.length > 0 ? charArr.forEach((char) => wordValue += (charFactorChangeTrigger(char) + getValue(char)) * charFactor.current) : wordValue = 0

  return (charFactor.current === 1 && charFactor.valid === true) ? wordValue : 0
}

module.exports = scrabble
