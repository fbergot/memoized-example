function memoized(func) {
  const cache = {};

  return function (...args) {
    const key = args.toString();

    if (cache[key]) {
      console.log("from cache");
      return cache[key];
    }

    const resultComputed = func.apply(this, args);
    cache[key] = resultComputed;

    console.log("from calc");
    return resultComputed;
  };
}

function calc(n, n2) {
  return n * n2;
}

const memoizesCalc = memoized(calc);

// meme args donc le 1er appel est calc, puis le 2eme est return via le cash
console.log(memoizesCalc(100, 5));
console.log(memoizesCalc(100, 5));

// les args changent donc le cache ne sera pas return
console.log(memoizesCalc(1005, 15));
console.log(memoizesCalc(1005, 12));

// meme args donc le 1er appel est calc, puis le 2eme est return via le cash
console.log(memoizesCalc(1005, 120));
console.log(memoizesCalc(1005, 120));

// deux obj créés, un référence l'autre comme membre de l'objet et l'autre rférencé car assigné à la var obj, les 2 ne peuvent pas être ramassés
let obj = {
  test: {
    member: 5,
  },
};

let obj2 = obj;
obj = "zone 51";

let obj_test = obj2.member;
obj_test = "lol";

obj2 = null;

console.log(obj2); // { test: { member: 5 } }
// let obj_test =  obj2.test;
