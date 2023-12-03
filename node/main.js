const fs = require("fs");

let quest = "fouronevhnrz44"

fs.readFile("quest.txt"), (err, data) => {
    if (err) throw err

    console.log(data.toString())
}