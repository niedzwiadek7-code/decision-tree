const EmployeeDataProvider = require('./data/employees/DataProvider')
const DecisionTreeTest = require('./test/DecisionTreeTest')

const program = async () => {
  await DecisionTreeTest.run(await EmployeeDataProvider.getTestData())
}

program()
