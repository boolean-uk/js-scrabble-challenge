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

    const newWord = myWord.toUpperCase().split('')

    for (let i = 0; i < newWord.length; i++) {
      const wordLetters = newWord[i]

      if (alphabetPoints.hasOwnProperty(wordLetters)) {
        const letterValues = alphabetPoints[wordLetters]
        wordScore += letterValues
      }
    }
    return wordScore
  }
}

module.exports = scrabble
