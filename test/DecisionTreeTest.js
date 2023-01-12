const DecisionTree = require('../src/models/DecisionTree')

class DecisionTreeTest {
  static run(testData) {
    testData.forEach((data) => {
      const decisionTree = new DecisionTree(data.basicData)
      data.treeData.forEach((testProp) => {
        const response = decisionTree.resolve(testProp.properties)
        if (typeof response === 'object') {
          console.log('For parameters:')
          console.log(testProp.properties)
          console.log(`salary is from ${response.from} to ${response.to}`)
          return
        }
        console.log(response)
      })
    })
  }
}

module.exports = DecisionTreeTest
