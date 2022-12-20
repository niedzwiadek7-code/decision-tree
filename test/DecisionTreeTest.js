class DecisionTreeTest {
  static run(resolver, testData) {
    testData.forEach((data) => {
      resolver.resolve(data)
    })
  }
}

module.exports = DecisionTreeTest
