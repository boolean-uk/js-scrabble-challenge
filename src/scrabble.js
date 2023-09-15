const scrabble = (myWord) => {
  const alphabetPoints = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  }

  if (
    myWord === '' ||
    myWord === ' \t\n' ||
    myWord === null ||
    myWord === undefined
  ) {
    return 0
  } else {
    let wordScore = 0

    const letterArray = myWord.toUpperCase().split('')

    for (let i = 0; i < letterArray.length; i++) {
      const wordLetters = letterArray[i]

      // eslint-disable-next-line no-prototype-builtins
      if (alphabetPoints.hasOwnProperty(wordLetters)) {
        wordScore += alphabetPoints[wordLetters]
      }
    }
    return wordScore
  }
}
console.log(scrabble('bread'))

module.exports = scrabble
