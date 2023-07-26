const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const xlsx = require('xlsx');

const csv = fs.readFileSync('csv/data.csv');
const records = parse(csv.toString('utf-8'));

// records.forEach((r, i) => {
//   console.log(i, r);
// });

const workbook = xlsx.readFile('xlsx/data.xlsx');
const ws = workbook.Sheets.영화목록;

const xlsxRecords = xlsx.utils.sheet_to_json(ws);
for (const [i, r] of xlsxRecords.entries()) {
  console.log(i, r.제목, r.링크);
}

// xlsxRecords.forEach((r) => {
//   console.log(r.제목, r.링크);
// });
