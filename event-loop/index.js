console.log('begin');

new Promise((resolve) => {
  console.log('promise consructor')
  setTimeout(() => {
    console.log('promise consructor setTimeout');
    resolve('promise resolve');
  }, 0);

}).then(resolvedValue => {

  setTimeout(() => {
    console.log(resolvedValue);
  }, 100);

  queueMicrotask(() => console.log('micro task 1'));
  queueMicrotask(() => console.log('micro task 3'));

  console.log('do then');

  queueMicrotask(() => console.log('micro task 2'));

});
