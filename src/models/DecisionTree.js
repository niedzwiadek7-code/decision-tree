const Range = require('./Range')

class DecisionTree {
  COUNT_RANGE = 100

  constructor(data) {
    const { className, features } = data[0]
    this.className = className
    this.features = features

    const enumProperties = this.getEnumProperties(data)

    this.tree = this.getSortData(enumProperties, data, className, features)
  }

  getEnumProperties(data) {
    const values = Object.keys(data[0]).map((prop) => ({
      name: prop,
      values: [],
    }))

    data.forEach((e) => {
      values.forEach((v) => {
        const newValue = e[v.name]
        if (!v.values.includes(newValue)) {
          v.values.push(newValue)
        }
      })
    })

    return values
  }

  getSortData(enumProperties, data, className, features) {
    const minSalary = Math.min(...enumProperties.find(
      (e) => e.name === className.SALARY,
    ).values.map((e) => Number(e)))
    const maxSalary = Math.max(...enumProperties.find(
      (e) => e.name === className.SALARY,
    ).values.map((e) => Number(e)))

    const ranges = Range.createRanges(minSalary, maxSalary, this.COUNT_RANGE)

    const tree = []
    const featureKeys = Object.values(features)
    const classNameKey = Object.values(className)[0]

    data.forEach((e) => {
      const passedElement = tree.find((v) => featureKeys.every((key) => e[key] === v[key]))
      if (passedElement) {
        const range = ranges.find((r) => r.checkValue(e[classNameKey]))
        if (!passedElement.values.includes(range)) {
          passedElement.values.push(range)
        }
        // passedElement.values.push(e[classNameKey])
      } else {
        const newElement = {}
        featureKeys.forEach((key) => {
          newElement[key] = e[key]
        })
        const range = ranges.find((r) => r.checkValue(e[classNameKey]))
        newElement.values = [
          range,
        ]
        tree.push(newElement)
      }
    })

    tree.forEach((el) => {
      if (el.values.length === 1) {
        // eslint-disable-next-line no-param-reassign,prefer-destructuring
        el[this.className.SALARY] = el.values[0]
        delete el.values
      } else {
        let min = Infinity
        let max = -Infinity
        el.values.forEach((x) => {
          if (x.from < min) min = x.from
          if (x.to > max) max = x.to
        })
        // eslint-disable-next-line no-param-reassign
        delete el.values
        el[this.className.SALARY] = new Range(min, max)
      }
    })

    return tree
  }

  resolve(props) {
    // eslint-disable-next-line no-restricted-syntax
    for (const el of this.tree) {
      const matched = Object.keys(el).every((prop) => {
        if (prop !== this.className.SALARY) {
          // console.log(prop)
          return props[prop] === el[prop]
        }
        // console.log(prop, 'salary')
        return true
      })
      if (matched) {
        return el[this.className.SALARY]
      }
    }
    return null
  }
}

module.exports = DecisionTree
