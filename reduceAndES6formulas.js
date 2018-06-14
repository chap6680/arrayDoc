const nums =  [3, 5, 6, 82, 1, 4, 3, 5, 82]
let value = 0
let valuexs = 0
let initialValue = 0

for (let i = 0; i < nums.length; i++) {
  value += nums[i]
};

console.log('For loop: ', value);


for (let num of nums) {
    valuexs += num;
  };

console.log('For x of xs ', valuexs);


/*REDUCE  REDUCE  REDUCE  - bring me one "value" representing the Array
this one value can be lots of thin gs - number is most common, but could be string or even another array


ARRAY.reduce(formula or thing to test, initialValue);
NOTE:  you can ignore initialValue but if the Array is empty, and no initialValue - ERROR :(

*/

//straight function here
const reducer = function (acc, item) {
    return acc + item;
};
const valuefunction = nums.reduce(reducer, initialValue);
console.log('using reduce as function', valuefunction);


//make use of new fat arrow and if just one item, you dont need the braces
const reducerShort = (acc, item) => acc + item
const valueFatArrow = nums.reduce(reducerShort, initialValue);
console.log('using reduce function with fat arrow: ', valueFatArrow);

//to make it really short - just replace the formula of "reducerShort" with the formula instead of calling
const reducerShortest = nums.reduce((acc, item) => acc + item, 0);
console.log('using reduce function with fat arrow: ', valueFatArrow);


///other REDUCE uses besides SUM - count of X
const countresult = nums.reduce((tally, amt) => {
    tally[amt] ? tally[amt]++ : tally[amt] = 1
    return tally
  }, {});
  console.log('count of each items: ', countresult);


  //a is accumulator - 
  const reducerLargest = nums.reduce((acc, item) => item > acc ? item:acc);
  console.log('using reduce get largest ', reducerLargest);

  //flatten an array
  let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(accumulator, currentValue) {
      return accumulator.concat(currentValue);
    },
    []
  );
  // flattened is [0, 1, 2, 3, 4, 5]
  console.log('Flattened Array:  ',flattened);