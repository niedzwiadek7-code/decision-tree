class Employee {
  get className() {
    return {
      SALARY: 'salary_in_usd',
    }
  }

  get features() {
    return {
      WORK_YEAR: 'work_year',
      EXPERIENCE: 'experience_level',
      EMPLOYMENT_TYPE: 'employment_type',
      JOB_TITLE: 'job_title',
      // EMPLOYEE_RESIDENCE: 'employee_residence',
      // REMOTE_RATIO: 'remote_ratio',
      // COMPANY_LOCATION: 'company_location',
      COMPANY_SIZE: 'company_size',
    }
  }

  constructor(employee) {
    Object.values(this.className).forEach((prop) => {
      this[prop] = employee[prop]
    })

    Object.values(this.features).forEach((prop) => {
      this[prop] = employee[prop]
    })
  }
}

module.exports = Employee
