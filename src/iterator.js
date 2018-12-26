// function makeiterator (arr) {
//     let nextIndex = 0;
//
//     return {
//         next:()=>{
//             if(nextIndex < arr.length){
//                 console.log('index:'+nextIndex);
//                 return{
//                     value: arr[nextIndex++],
//                     done:false
//                 }
//             }else{
//                 return{
//                     done: true
//                 }
//             }
//         }
//     }
// }
//
// const it = makeiterator(['吃饭','睡觉','打豆豆']);
//
// console.log('first',it.next().value);
// console.log('second',it.next().value);
// console.log('third',it.next().value);
// console.log('final',it.next().done);

function *makeIterator(arr) {
 for(let i =0; i<arr.length;i++){
     yield arr[i]
 }
}

const gen = makeIterator(['吃饭','睡觉','打豆豆']);

console.log('first',gen.next().value);
console.log('second',gen.next().value);
console.log('third',gen.next().value);
console.log('final',gen.next().done);