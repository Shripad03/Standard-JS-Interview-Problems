
/*
===========================================
  Interview Assessment: Implement PromisePolyfil
===========================================

📌 Instructions:
1. Implement `PromisePolyfil` **without using `Promise`**.
2. Refer **only** to MDN documentation: https://developer.mozilla.org/
3. Ensure the implementation passes all test cases below.
4. **Final step:** Share only your `PromisePolyfil` code via https://pastebin.com/.
*/

//////////////////////////////////////////
// ✅ Test Cases
//////////////////////////////////////////


// Polyfill to mimick JS Promises

function PromisePolyfil(executor) {

	let onResolve = null;
  let onReject = null;
  let onFulfill = null;
  let onFinally = null;
  
  let isFullfiled = false;
  let isRejected = false;
  let value = undefined;
  let error = undefined;
  
  
   this.finally = function (callback) {
  	onFinally = callback;
    if (isFullfiled || isRejected) {
    	onFinally();
    }
    return this;
  }
  
	//then case
  	this.then = function (callback) {
    	onResolve = callback;
      if(isFullfiled) {
        onResolve(value);
        if (typeof onFinally === 'function') onFinally();
      }
      return this;
    }
  //catch case
  this.catch = function (callback) {
  	onReject = callback;
    if (isRejected) {
    	onReject(error);
      if (typeof onFinally === 'function') onFinally();
    }
    return this;
  }
  

  //resolve 
  function resolve(val) {
   if (isRejected || isFullfiled) return ;
  	isFullfiled = true;
    value = val;
    if (typeof onResolve === 'function') {
    	onResolve(val);
    }
    if (typeof onFinally === 'function') {
    	onFinally();
    }
  }
  //reject
   function reject(err) {
   if (isRejected || isFullfiled) return ;
  	isRejected = true;
    error = err;
    if (typeof onReject === 'function') {
    	onReject(err);
    }
    if (typeof onFinally === 'function') {
    	onFinally();
    }
  }
  //try block
  try {
  	executor(resolve, reject);
  }	catch (err){
  	reject(err);
  }
}



/*
===========================================
  Interview Assessment: Implement PromisePolyfil
===========================================

📌 Instructions:
1. Implement `PromisePolyfil` **without using `Promise`**.
2. Refer **only** to MDN documentation: https://developer.mozilla.org/
3. Ensure the implementation passes all test cases below.
4. **Final step:** Share only your `PromisePolyfil` code via https://pastebin.com/.
*/

//////////////////////////////////////////
// ✅ Test Cases
//////////////////////////////////////////
// 1️⃣ Chaining & Error Handling
const promise1 = new PromisePolyfil((resolve) => resolve('Start'));

promise1.then(console.log)          // → 'Start'
  .then(() => 'Step 1')
  .then(console.log)          // → 'Step 1'
  .then(() => { throw 'Error at Step 2'; })
  .catch(console.error)       // → 'Error at Step 2'
  .then(() => 'Recovered')
  .then(console.log)          // → 'Recovered'
  .finally(() => console.log('Chain complete')); // → 'Chain complete'

// 2️⃣ Nested Promises
const p2 = new PromisePolyfil((resolve) => resolve('Outer Resolved'));

p2.then(console.log)          // → 'Outer Resolved'
  .then(() => new PromisePolyfil((resolve) => 
      setTimeout(() => resolve('Inner Resolved'), 500)
  ))
  .then(console.log)          // → 'Inner Resolved'
  .catch(console.error);      // (Should not be called)

// 3️⃣ Multiple `.catch()` Calls
const p3 = new PromisePolyfil((_, reject) => reject('Initial Failure'));

p3.catch(console.error)       // → 'Initial Failure'
  .then(() => { throw 'Failure in Catch'; })
  .catch(console.error)       // → 'Failure in Catch'
  .finally(() => console.log('Final cleanup')); // → 'Final cleanup'

// 4️⃣ Async with Delayed Resolution
const p4 = new PromisePolyfil((resolve) => 
    setTimeout(() => resolve('Delayed Resolution'), 1000)
);

p4.then(console.log)          // → 'Delayed Resolution'
  .then(() => new PromisePolyfil((resolve) => 
      setTimeout(() => resolve('Next Step'), 500)
  ))
  .then(console.log)          // → 'Next Step'
  .finally(() => console.log('All done')); // → 'All done'






























