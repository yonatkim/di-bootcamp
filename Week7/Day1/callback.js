/** Async in JS
 * Promises, Async Await
 * Traditional Callback Hell*/ 

function getX(callback){
    setTimeout(() => {
        callback(5);
    }, 2000);
}
function getY(callback){
    callback(6);
}

function getXY() {
    let x = getX((x) => {
        let y = getY((y) => {
            console.log(x + y);
        });
    });
    
}
getXY();