// read-file.js

const fs = require('fs');
// import { readFile as readFsFile } from 'fs/promises';

function readFile() {
    fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File content:', data);
    });
}

module.exports = readFile;
