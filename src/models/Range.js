const assert = require('assert')

class Range {
  constructor(from, to) {
    assert(from < to)
    this.from = from
    this.to = to
  }

  checkValue(value) {
    return value >= this.from && value <= this.to
  }

  matchRanges(range) {
    return this.from === range.from && this.to === range.to
  }

  toString() {
    return `${this.from}-${this.to}`
  }

  static createRanges(from, to, countRanges) {
    const localDifference = Math.ceil((to - from) / countRanges)
    const rangesArray = []
    let localFrom = from
    let localTo = from + localDifference
    for (let i = 0; i < countRanges; i += 1) {
      rangesArray.push(new Range(localFrom, localTo))
      localFrom = localTo
      localTo += localDifference
      if (localTo > to) {
        localTo = to
      }
    }
    return rangesArray
  }
}

module.exports = Range
