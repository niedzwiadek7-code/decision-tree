const _ = require('lodash')
const Employee = require('../../src/models/Employee')
const FileReader = require('../../src/utils/FileReader')

class EmployeeDataProvider {
  static async getTestData() {
    return [
      {
        basicData: await FileReader.readFromCSV('./data/employees/ds_salaries.csv', (row) => new Employee(row)),
        treeData: [
          _.cloneDeep(require('./test-data-1.json')),
          _.cloneDeep(require('./test-data-2.json')),
          _.cloneDeep(require('./test-data-3.json')),
        ],
      },
    ]
  }
}

module.exports = EmployeeDataProvider
