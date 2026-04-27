/**Requirements:**
1. Create two Symbols with the same description `"testId"`
2. Compare them with `===` — print the result
3. Print `typeof` each Symbol
4. Print `.description` of each Symbol
5. **Bonus:** Use two Symbols as keys on the same object and verify they don't overwrite each other*/


let sym1 = Symbol("testId");
let sym2 = Symbol("testId");

console.log(sym1 === sym2);       // expected true but getting fales bez it's pointing to 2 diff symbols
console.log(typeof sym1);         // symbol
console.log(typeof sym2);         // symbol
console.log(sym1.description);    //Prints- Discription(Text between doble quotes)
console.log(sym2.description);
