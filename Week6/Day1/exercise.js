{
  let x = 5;
  console.log('in scope=>', x);
}
// console.log('out scope=>', x);

let b=3, d = b, u = b;
const tree = ++d * d*b * b++ +
// 4 * 4 * 3 * 3 +
+ --d+ + +b-- +
// 3 + 4 +
+ +d*b+ +
// 3 * 3 +
u
// 3
console.log(tree);

let users = ['John', 'Mary', 'Dan', 'Anne'];
users.forEach((item,indx,arr) => {
    console.log('item->',item,indx);
    arr[indx] = item+'@gmail.com'
});
//console.log(users);

  
