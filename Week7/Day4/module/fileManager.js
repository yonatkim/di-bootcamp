// fileManager.js

import fs from 'fs';

export function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

export function writeFile(filename, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, content, 'utf8', (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

//module.exports = { readFile, writeFile };

