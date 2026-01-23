// let maps = (x) => x.map((n)=>n*2)

// console.log(maps([1, 2, 3]));

// function sum (numbers) {
//     if (numbers.length === 0) return 0;

//      let summa = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       summa += numbers[i];
//     }
//     return summa
//   }

//   console.log(sum([1, 5.2, 4, 0, -1]));

// function printArray(array){
//   return array.join();
// }

// console.log(printArray( [2, 4, 5, 2]));

// let arr = ['5', '0', 9, 3, 2, 1, '9', 6, 7]

// function sumMix(arr, sum = 0) {
//     arr.forEach((v) => sum += Number(v));
//     return sum;
// }
// console.log(sumMix(arr));

// let array =[1,2,3,4,5]
// function array(i) {
//     let newarray = array.map((v)=> 0 - v)
//      console.log(newarray);
//   };

// function stringToArray(string){

//     return string.split(" ")

//    }

// console.log(stringToArray("Robin Singh"), );

// function grow(x){
//     let sum = 1
//      x.forEach((v)=>sum = sum * v)
//   }

//   console.log(grow([1, 2, 3]), 6);

// let textbooks = (['Algebra', 'History', 'Geometry', 'English'])

// let sorter = (textbooks) => textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1)

// console.log(textbooks);

// let arr = [1, -4, 7, 12]

// let sum = 0
// let newArr = arr.filter((n) => n > 0).map((n) => n+2)
// console.log(newArr);

// let stringToArray = (string) => string.split(" ")
// stringToArray = ("I love arrays they are my favorite")
// console.log( stringToArray );

// function squareSum(numbers){
//     let sum = 0
//     numbers.forEach ((n) =>{
//       sum += n ** 2
//     } )
//    return sum
// }

// console.log(squareSum([1,2]));

// function typeOfSum(a, b) {
//     return typeof (a+b)
//   }

// function opposite(number) {
//     return(-number);
//   }

// console.log([1 -2 -34, 34]);

// function nextItem(xs, item) {
//     let i = Array.from(xs).indexOf(item);
//     return (i || i === 0) ? xs[i+1] : undefined;
//    }

//   console.log(Test.assertEquals(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6));
//    console.log(Test.assertEquals(nextItem(['a', 'b', 'c'], 'd'), undefined));
//    console.log(Test.assertEquals(nextItem(['a', 'b', 'c'], 'c'), undefined));
//    console.log(Test.assertEquals(nextItem("testing", "t"), "e"));

// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) {
//     return [];
//   }

//   let positiveCount = 0;
//   let negativeSum = 0;

//   for (let num of input) {
//     if (num > 0) {
//       positiveCount++;
//     } else if (num < 0) {
//       negativeSum += num;
//     }
//   }

//   return [positiveCount, negativeSum];
// }

// console.log (countPositivesSumNegatives([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]))

// let smash = (words)=> words.join(" ")

// console.log(smash(["hello", "world"]));

// let args_count = (1, 2)
// function args_count () {
//     return arguments.length
//   }

// let circleArea = (1)
// function circleArea(radius) {
//     if(radius < 1){
//       throw new Error
//     }else{
//       return Math.PI * radius**2
//     }
//   }

// friends = ["Ryan", "Kieran", "Jason", "Yous"]
// let friend = (friends)=> {
//     return friends.filter((fr) => fr.length === 4)
//   }

// let sortList = [
//     {"a": 1, "b": 3},
//     {"a": 3, "b": 2},
//     {"a": 2, "b": 40},
//     {"a": 4, "b": 12}
//   ]
// let sortList = (sortBy, list)=> list.sort((a, b) => b[sortBy] - a[sortBy]);

// let area =(5,4)

// let area = (d,l)=> d<=l ? "Not a rectangle" : +(Math.sqrt(d**2 - l**2) * l).toFixed(2);

// function arithmetic(a, b, operator){
//   if (operator === "add"){
//     return a+b
//   } else if(operator === "subtract"){
//     return a-b
//   }else if(operator ==="multiply"){
//     return a*b
//   }else if(operator === "divide"){
//     return a/b
//   }
// }

// arithmetic(5, 2, "add")
// arithmetic(5, 2, "subtract")
// arithmetic(5, 2, "multiply")
// arithmetic(5, 2, "divide")

// function consecutive(array) {
//     if (array.length < 2) return 0;

//     array.sort((a, b) => a - b);

//     let missing = 0;
//     for (let i = 0; i < array.length - 1; i++) {
//       missing += Math.max(0, array[i + 1] - array[i] - 1);
//     }
//     return missing;
//   }

// consecutive(4, 8, 6)

// function solution(fullText, search) {
//     return fullText.split(search).length -1
//   }

// solution(full_text = "aaabbbcccc")

// let OrderPeople = (people)=>people.sort((a, b)=>a.age - b.age)

// OrderPeople({ age: 46, name: 'roger' },
//     { age: 99, name: 'vinny' },
//     { age: 26, name: 'don' },
//     { age: 74, name: 'brendan' })

// let isSquare =(arr)=> arr.length ? arr.map((n)=>!`${Math.sqrt(n)}`.includes(".")).every((v)=>v)  :  undefined;

// isSquare([1, 4, 9, 16, 25, 36])

// const students = [
//   { name: "Ali", score: 70, active: true },
//   { name: "Vali", score: 85, active: false },
//   { name: "Hasan", score: 90, active: true },
//   { name: "Husan", score: 60, active: true }
// ];

// person = students.filter((obj)=>{

//     if(obj.active === true ) obj.score = obj.score * 0.1 + obj.score
//      return obj
// } )
// let sum = students.reduce((acc, curr)=> acc + curr.score, 0) / students.length

// console.log(+sum.toFixed(2));

// let data = [
//   { type: "income", amount: 500 },
//   { type: "expense", amount: 200 },
//   { type: "income", amount: 1500 },
//   { type: "expense", amount: 300 },
//   { type: "income", amount: 700 }
// ];

// data = data.filter((obj)=>obj.amount>1000)

// console.log(data);

// data = data.findIndex((obj)=>obj.type === "expense")

// console.log(data);

// data = data.findLastIndex((obj)=>obj.type === "income")

// console.log(data);

// =====================================

// 3-misol

// let products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 600 }
// ];

// products.sort((a, b)=> a.price - b.price)

// console.log(products);

// ======================================

// 4-misol

// let employees = [
//   { name: "Ali", verified: true, role: "user" },
//   { name: "Vali", verified: true, role: "manager" },
//   { name: "Hasan", verified: true, role: "user" }
// ];

//  employees = employees.filter((obj)=>obj.role === "manager")

// console.log(employees);

// =======================================

// 5-misol

// let sales = [
//   [120, 300],[450, 100],[600, 200]
// ];

// sales = sales.flat()

// let newsales = sales.reduce((acc, curr) => acc + curr, 0)

// console.log(newsales);

// =======================================

// 6-misol

// let users = [
//   { name: "Ali", skills: ["html", "css", "js"] },
//   { name: "Vali", skills: ["node", "js", "mongo"] },
//   { name: "Hasan", skills: ["css", "figma"] }
// ];
// users = users.filter((skill) => skill.skills.includes("js"));
// console.log(users);

// ===========================================

// 7-misol

// const orders = [
//   { product: "Book", price: 10, quantity: 3 },
//   { product: "Pen", price: 2, quantity: 10 },
//   { product: "Bag", price: 40, quantity: 1 }
// ];
// let sum = orders.reduce((acc , curr)=>acc + curr.price * curr.quantity ,0)

// console.log(sum);

// ============================================

// 8-misol

// const athletes = [
//   { name: "Ali", time: 12.5 },
//   { name: "Vali", time: 11.8 },
//   { name: "Hasan", time: 12.1 }
// ];
// // athletes.sort((a, b)=> a.time - b.time)

// console.log(athletes);

// 9-misol

// let data = [5, 10, 15, 20, 25, 30];

// data.fill(0,3)

// let newdata = data.copyWithin(0 , 1 , 4)

// console.log(newdata);

// =============================================

// 10-misol

// let results = [
//     { name: "Ali", score: 78 },
//     { name: "Vali", score: 92 },
//     { name: "Hasan", score: 55 },
//     { name: "Husan", score: 66 }
//   ];

//   results.filter((obj)=>{
//       if(obj.score > 60)
//   })

// let arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0);
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// function findNeedle(haystack) {
//     let index = haystack.indexOf("needle")
//      return "found the needle at position " + index
//    }
// console.log(findNeedle (["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

// let  removeEveryOther = (arr) =>  arr.filter((value , i) => !( i % 2) && value)
//   removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])

// function mergeArrays(arr1, arr2) {
//     return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
// //   }
// console.log(mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);

// let duckDuckGoose = (players, position)=> {
//     let idx = (position - 1) % players.length;
//     return players[idx].name;
//   }
// let flatten = (arr)=> [].concat(...arr);
// console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]));

// let camelize = (str)=>{
//     if(!str) return "";
//     str = str.toLowerCase();
//     for (let s of str) if ((s.charCodeAt() > 57 || s.charCodeAt() < 48) && (s.charCodeAt() < 97 || s.charCodeAt() > 122)) str = str.replace(s, " ");
//     if(str.includes(" ")) return str.split(" ").map((s)=>`${s[0]||""}`.toUpperCase()+s.slice(1)).join("");
//     return str[0].toUpperCase()+str.slice(1);
//   }
// console.log(camelize("java script"));

// let inArray = (Arr1, Arr2) => {
//     return Arr1
//    .filter(word => Arr2.some(str => str.includes(word)))
//    .sort();
//   }
//   inArray (["xyz", "live", "strong"] ,  ["lively", "alive", "harp", "sharp", "armstrong"])
//  console.log(inArray);

// let reverse=a=>a.reverse();
// console.log(reverse([1, 2, 3]), [3, 2, 1]);

// items = [{a: "b", c: "d"}]

// let sumArray = (array)=> !array || array.length < 3 ? 0 : array.reduce((acc , curr)=> acc + curr , 0) - Math.min(...array) - Math.max(...array)
//   console.log(sumArray([ 6, 2, 1, 8, 10 ]));

// let stringy = (s)=>Array(s).fill(0).map((v, i)=>(i+1) %2).join("")
// console.log(stringy);

// let gooseFilter = (arr)=> arr = arr.filter((v)=> !["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].includes(v))

// let swapValues = (arr) => {
//     if (arr.length < 2) return arr;
//     [arr[0], arr[1]] = [arr[1], arr[0]];
//     return arr;
//   }
//  console.log(swapValues([0], 2, "Failed swapping numbers"));

// let playerManager = (str) => {
//   if (!str || str.trim() === "") return [];
//   return str
//     .split(",")
//     .map((s) => s.trim())
//     .reduce((arr, cur, i, a) => {
//       if (i % 2 === 0 && a[i + 1]) {
//         arr.push({ player: cur, contact: a[i + 1] });
//       }
//       return arr;
//     }, []
// };

// const cleanUp=(b,c,g)=>{
//     if(!Array.isArray(g)) return "Cr@p";
//     let t=0;
//     for(let i=0;i<g.length;i++){
//       if(Array.isArray(g[i])){
//         for(let j=0;j<g[i].length;j++){
//           if(g[i][j]=="D") return "Dog!!";
//           if(g[i][j]=="@") t++;
//         }
//       }
//     }
//     return t<=b*c?"Clean":"Cr@p";
//   };
// console.log(cleanUp(2,2, [   ['_','_','@'],    ['@','_','_']  ]) )

// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(positiveSum([1,2,3,4,5]));

// function type(v) {
//   if (Array.isArray(v)) return "array";
//   if (v instanceof Date) return "date";
//   return typeof v;
// }
// console.log(
//   type([]) == "array",
//   type({}) == "object",
//   type("") == "string",
//   type(NaN) == "number"
// );
