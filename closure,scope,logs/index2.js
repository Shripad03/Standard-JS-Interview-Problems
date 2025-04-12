function f1(a , b ) {
    let c;
  c = a;
  a = b;
  b = c;

  console.log(c,a,b)
}


function f2(a ,b) {
    let c;
    c = a[0];
    a[0] = b[0];
    b[0] = c;
}

let a = 4, b = 5, c = 6;

f1(a, b);
f2([b], [c]);
console.log(c,a,b)
console.log(c - a - b);