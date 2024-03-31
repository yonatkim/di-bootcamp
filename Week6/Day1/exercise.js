{
  let x = 5;
  console.log('in scope=>', x);
}
// console.log('out scope=>', x);

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let secret = '';
for (let first in names.sort()) {
    secret += Array.from(names[first][0]);
}
console.log(`The secret is: ${secret}`)

