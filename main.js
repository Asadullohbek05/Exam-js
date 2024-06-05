// --------------------------1------------------------------✅

// function getSum(n) {
//     let arr1 = [];
//     let arr2 = [];
//     let summ = 0;
//     for (let i = 1; i <= n; i++) {
//         arr1.push(i)
//         arr2.unshift(i)
//     }
//     for (let j = 0; j < arr1.length; j++) {
//         summ += arr1[j] * arr2[j]
//     }
//     return summ
// }

// let n = 4;
// console.log(getSum(n))

// --------------------------2------------------------------✅

// function getLongestWord(arr) {
//     let max = arr[0];
//     for (const el of arr) {
//         if (el.length > max.length) {
//             max = el
//         }
//     }

//     return max;
// }

// let arr = ["Abdulaziz", "Murod", "Yulduz", "Abdug'affor", "Jamila"];
// console.log(getLongestWord(arr))


// --------------------------3------------------------------✅
// function getDividers(arr, n) {
//     // let newArr = arr.filter((el) => el % n === 0)
//     // return newArr
// }

// let arr = [2, 5, 7, 10, 0, 18, 15]
// let n = 5;
// console.log(getDividers(arr, n))

// --------------------------4------------------------------✅

// function checkWordCapitalize(str) {
//     let arr = str.split(" ")
//     let isCapitalize = true;
//     for (const el of arr) {
//         if (el[0] === el[0].toLowerCase()) {
//             isCapitalize = false
//         }
//     }

//     return isCapitalize
// }

// let str = "Abdulaziz Programmer Is FullStack Developer Hello"
// console.log(checkWordCapitalize(str))


// --------------------------5------------------------------❌



// function getCharCountObj(str) {
//     let newArr = str.split("")
//     let obj = {}
//     for (const el1 of newArr) {
//         let res = countObjChar(el1)

//         console.log(obj)
//     }

//     function countObjChar(char) {
//         let count = 0
//         let arr = str.split("")
//         for (const el2 of arr) {
//             if (el2 === char) {
//                 count++
//             }
//         }

//         return count
//     }
// }

// let str = "Abdulaziz Programmer"
// getCharCountObj(str)



// --------------------------6------------------------------✅

// function changeObjToString(obj) {
//     let arr = Object.entries(obj)
//     let result = ""

//     for (const el of arr) {
//         result += el[0] + el[1]
//     }
//     return result
// }

// let obj = { a: 1, b: 2, c: 3 }
// console.log(changeObjToString(obj))


// --------------------------7------------------------------✅

// const products = [
//     { id: 1, name: 'Bike', price: 100 },
//     { id: 2, name: 'TV', price: 400 },
//     { id: 3, name: 'Album', price: 800 },
//     { id: 4, name: 'Book', price: 600 },
//     { id: 5, name: 'Phone', price: 500 },
//     { id: 6, name: 'Computer', price: 1000 },
//     { id: 7, name: 'Skate', price: 300 },
//     { id: 8, name: 'Keyboard', price: 200 },
//     { id: 9, name: 'Bottle', price: 700 },
// ];

// function deleteProducts(...ids) {
//     let result = products.filter((el) => !ids.includes(el.id))
//     return result;
// }

// console.log(deleteProducts(4, 6, 9))

// --------------------------8------------------------------✅

// function increaseProductPrice(products, id, n) {
//     let arr = products.map((el) => el.id === id ? { ...el, price: el.price += el.price * n / 100 } : el)
//     return arr
// }

// const products = [
//     { id: 1, name: 'Bike', price: 100 },
//     { id: 2, name: 'TV', price: 400 },
//     { id: 3, name: 'Album', price: 800 },
//     { id: 4, name: 'Book', price: 600 },
//     { id: 5, name: 'Phone', price: 500 },
//     { id: 6, name: 'Computer', price: 1000 },
//     { id: 7, name: 'Skate', price: 300 },
//     { id: 8, name: 'Keyboard', price: 200 },
//     { id: 9, name: 'Bottle', price: 700 },
// ];
// console.log(increaseProductPrice(products, 6, 20))


// --------------------------9------------------------------✅

// function count(str, char) {
//     let count = 0;
//     let arr = str.split("");
//     for (const el of arr) {
//         if (el === char) {
//             count++
//         }
//     }
//     return count
// }

// let str = "Abdulaziz Programmer"
// let char = "a"
// console.log(count(str, char))


// ---------------------------10----------------------------❌

// function getInverse(obj) {
//     let objKeys = Object.keys(obj)
//     let objValues = Object.values(obj)
//     let newArr = []

//     for (let i = 0; i < objKeys.length; i++) {
//         let newObj = {}
//         // console.log(objKeys[i])
//         // console.log(objValues[i])
//         let prop = objKeys[i]
//         let val = objValues[i]
//         newArr.push(newObj)
//     }

//     console.log(newArr)
// }

// let obj = {
//     a: 10,
//     b: 5,
//     c: 15
// };
// getInverse(obj);





