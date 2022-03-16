// Note: you shouldn't need to change anything in this file.

Scrabble = require('../src/scrabble-practice.js')
let scrabble;

describe("Scrabble", function() {
  it('returns 0 for empty words', function() {
    scrabble = new Scrabble('')

    expect(scrabble.score()).toEqual(0)
  })

  it('returns 0 for whitespace', function() {
    scrabble = new Scrabble(" \t\n")
// \t that equals empty space tab or indentation
// \n is a new line, a break in a html like </br>
    expect(scrabble.score()).toEqual(0)
  })

  it('returns 0 for null', function() {
    scrabble = new Scrabble(null)
// no value added, nothing
    expect(scrabble.score()).toEqual(0)
  })

  it('scores short word', function() {
    scrabble = new Scrabble('a')

    expect(scrabble.score()).toEqual(1)
  })

  it('scores short word', function() {
    scrabble = new Scrabble('f')

    expect(scrabble.score()).toEqual(4)
  })

  it('scores a simple word', function() {
    scrabble = new Scrabble('street')

    expect(scrabble.score()).toEqual(6)
  })

  it('scores a more complicated word', function() {
    scrabble = new Scrabble('quirky')

    expect(scrabble.score()).toEqual(22)
  })

  it('scores a case-insensitive word', function() {
    scrabble = new Scrabble('OXYPHENBUTAZONE')

    expect(scrabble.score()).toEqual(41)
  })

  it('scores a double-letter', function() {
    scrabble = new Scrabble('C{A}T')

    expect(scrabble.score()).toEqual(6)
  })

  it('scores a triple-letter', function() {
    scrabble = new Scrabble('C[A]T')

    expect(scrabble.score()).toEqual(7)
  })

  // it('scores a double-and-triple-letter', function() {
  //   scrabble = new Scrabble('{C[A]T}')

  //   expect(scrabble.score()).toEqual(11)
  // })

})