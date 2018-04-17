
var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function (err, files) {
    console.log('Content of the folder: '.magenta);
    var text = [];
    for (let file of files) {
        var fileSize = fs.statSync(file).size;
        var unit = "B";
        if (fileSize > 1024) {
            fileSize = (fileSize/1024).toFixed(1);
            unit = "kB";
        }
        console.log('\nFile name: '.cyan + file);
        console.log('Size: '.cyan + fileSize + unit);

        text.push('name: ' + file, 'size: ' + fileSize + unit);
    }
    fs.writeFile('./text.txt', text, function (err) {
        if (err) throw err;
        console.log('Saved!'.blue);
    })
})
