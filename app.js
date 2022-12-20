const EmployeeDataProvider = require('./data/employees/DataProvider')
const DecisionTreeTest = require('./test/DecisionTreeTest')
const DecisionTreeResolver = require('./src/resolvers/DecisionTreeResolver')

const program = async () => {
  await DecisionTreeTest.run(DecisionTreeResolver, await EmployeeDataProvider.getTestData())
}

program()
