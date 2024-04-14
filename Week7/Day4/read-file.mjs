// read-file.mjs

//const fs = require('fs');

import { readFile as readFsFile } from 'fs/promises';

export async function readFile() {
    try {
        const data = await readFsFile('files/file-data.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error(err);
    }
}


// module.exports = readFile;
