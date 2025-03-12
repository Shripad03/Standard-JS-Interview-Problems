// Traditional Call Method


const nameObj = {
    fname : 'Shreepad'
}

function getMyName(name, location) {
    console.log(this.fname, name, location )
}


Function.prototype.myCall = function(context, ...args) {
    
    context = context || globalThis;

    const fnSymbol = Symbol();
    context[fnSymbol] = this;


    const result = context[fnSymbol](...args);

    delete context[fnSymbol];

    return result;
}



getMyName.call(nameObj, 'Avhad', 'Mumbai'); //traditional call 


getMyName.myCall(nameObj, 'Avhad', 'Mumbai');   //polyfills


// greeting.myCall(person, 'Hello', 'i');


