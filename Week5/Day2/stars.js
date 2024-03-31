// stars challenge
// --1
let stars = '*';
for (let i = 0; i < 6; i++) {
    console.log(stars);
    stars += ' *';
};
// --2 nested
for (var i = 1; i < 7; i++) {
    console.log("* ".repeat(i));
};
// --3
let ying = '*';
let yang = '          ';
for (let i = 0; i < 6; i++) {
    console.log(ying + yang);
    yang.slice(0, yang.length - 2);
    ying += ' *';
};
