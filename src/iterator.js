function makeiterator (arr) {
    let nextIndex = 0;

    return {
        next:()=>{
            if(nextIndex < arr.length){
                console.log('index:'+nextIndex);
                return{
                    value: arr[nextIndex++],
                    done:false
                }
            }else{
                return{
                    done: true
                }
            }
        }
    }
}

const it = makeiterator(['吃饭','睡觉','打豆豆']);

console.log('first',it.next().value);
console.log('second',it.next().value);
console.log('third',it.next().value);
console.log('final',it.next().done);