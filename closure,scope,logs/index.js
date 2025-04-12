// ====================================CLOSURES==============================

console.log(this);

function logThis() {
    console.log(this);
}

logThis();

const logThisFat = ()=> {
    console.log(this)
}
logThisFat();

const myObject = {
    o : 'o',
    logThis,
}
myObject.logThis();