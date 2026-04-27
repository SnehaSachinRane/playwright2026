
/**Requirements:**
1. Store `Number.MAX_SAFE_INTEGER` and print it
2. Add `1`, `2`, and `3` to it — observe where the result stops changing
3. Repeat using BigInt equivalent (`9007199254740991n`)
4. Print `typeof` a BigInt value
5. Demonstrate that mixing BigInt and Number throws an error (use try/catch)*/


let max = Number.MAX_SAFE_INTEGER;
console.log(max);      //print -9007199254740991
console.log(max + 1);  //print- 9007199254740992
console.log(max + 2);  // print same value max +1 -bcz of  post increment 9007199254740992
console.log(max + 3);  // pritn - 9007199254740994(post increment by by 2)


let bigMax = 9007199254740991n;
console.log(bigMax);  // ?
console.log(bigMax + 1n);  // ?
console.log(bigMax + 2n);  // ?
console.log(bigMax + 3n);  // ?