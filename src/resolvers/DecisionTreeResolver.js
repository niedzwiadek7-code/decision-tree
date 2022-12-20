const Resolver = require('./Resolver')

class DecisionTreeResolver extends Resolver {
  static resolve(data) {
    console.log(data)
  }
}

module.exports = DecisionTreeResolver
