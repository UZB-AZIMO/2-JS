// {1-MASALA

// {
//     function foo(array){
//                 let sum = []
//                 for(let i = 0, len = array.length; i < len; i++){
//                  if(array[i] > 0){
//                     sum.push(array[i])
//                  }
//                 }
//                 return sum
//             }
//             console.log(foo([-5, 3, 5, -2]));
//         }

// }


// {2-masala

// {
//         const reverseString = (word) => {
//             return word
//                        .split("")
//                        .reverse()
//                        .join("")
//         }
//         console.log( reverseString("salom"));
//         console.log( reverseString("Aziz"));
//     }
    

// }

// {3-masala

// {
//         const reverseString = (word) => {
//             return word.toString()
//                        .split("")
//                        .reverse()
//                        .join("")
//         }
//         console.log( reverseString(123));
//         console.log( reverseString(987654321));
//     }

// }


// {4-masala

// {
//         let numbers = [true, false, false, true];
//         {
//           let result = [];
//           numbers.forEach((son) => (son !== true ? result.push(son) : console.log("")));
//           console.log(result);
//         }
//         {
//             let result  = numbers.filter((son) => son == false)
//             console.log( result );
//         }
//     }

// }


// {5-masala

//     {
//     function foo(array){
//      let sum = 0
//      for(let i = 0, len = array.length; i < len; i++){
//         if(array[i] % 2 === 0){
//             sum += array[i]
//         }
//      }
//      return sum
//     }
//     console.log(foo([1, 2, 3, 4, 5]));
// }

// }

// {6-masala

// {
// function foo(array){
//             let sum = []
//          for(let i = 0, len = array.length; i < len; i++){
//           sum.push(array[i] ** 2)
//          }
//          return sum
//         }
//         console.log(foo([5, 2, 3]));
//     }

// }

// {7-masala

// {
//       {
//         let sum = [];
//         function son(n) {
//           for (let i = 1; i <= n; i++) {
//             sum.push(i);
//           }
//           return sum;
//         }
//         console.log(son(8));
//       }
//     }

// }

// {8-masala

{
function foo(a, b){
            let sum = []
            for(let i = a; i < b; i++){
                if(i % 2 === 0){
                    sum.push(i)
                }
            }
            return sum
        }
        console.log(foo(2, 9));
    }

// }

// {9-masala

// {
//         function boshHarf(name) {
//             return name
//                         .charAt(0)
//                         .toUpperCase()
//                          + name.slice(1);
//         }
//         console.log(boshHarf("laylo"));
//     }
    
// }

// {10-masala


//  {
//     function repeatString(str, n) {
//         return str.repeat(n).trim();
//     }
//     console.log(repeatString("Assalomu Alaykum ", 2));
// }

// }






 


// {12-masala

// {
//         function tartibSon(array) {
//             return array.sort((a, b) => a - b);
//         }
//         console.log(tartibSon([2, 1, 13, 4]));
        
//     }

// }
