var fs = require('fs');

var data = fs.readFileSync("index.txt");
console.log(data.toString());
console.log("\nFin de programme");
