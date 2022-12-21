const DecisionTree = require('../src/models/DecisionTree')

class DecisionTreeTest {
  static run(testData) {
    testData.forEach((data) => {
      const decisionTree = new DecisionTree(data.basicData)
      data.treeData.forEach((testProp) => {
        const range = decisionTree.resolve(testProp.properties)
        if (range) {
          console.log('For parameters:')
          console.log(testProp.properties)
          console.log(`salary is from ${range.from} to ${range.to}`)
          return
        }
        console.log('Provided parameters:')
        console.log(testProp.properties)
        console.log('are invalid')
      })
    })
  }
}

module.exports = DecisionTreeTest
