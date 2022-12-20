const Employee = require('../../src/models/Employee')
const FileReader = require('../../src/utils/FileReader')

class EmployeeDataProvider {
  static async getTestData() {
    return [
      await FileReader.readFromCSV('./data/employees/ds_salaries.csv', (row) => new Employee(row)),
    ]
  }
}

module.exports = EmployeeDataProvider
