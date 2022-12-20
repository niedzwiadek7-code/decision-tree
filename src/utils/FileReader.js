const fs = require('fs')
const { parse } = require('csv-parse')

class FileReader {
  static async readFromCSV(filepath, dataFormatter) {
    return new Promise((resolve) => {
      const data = []
      let properties
      fs.createReadStream(filepath)
        .pipe(parse({ delimiter: ';', from_line: 1 }))
        .on('data', (row) => {
          if (!properties) {
            properties = row.filter((e) => e)
            return
          }
          const rowData = {}
          row.forEach((e, index) => {
            rowData[properties[index]] = e
          })
          if (dataFormatter) {
            data.push(dataFormatter(rowData))
            return
          }
          data.push(rowData)
        })
        .on('error', (e) => {
          console.log(e.message)
        })
        .on('end', () => {
          resolve(data)
        })
    })
  }
}

module.exports = FileReader
