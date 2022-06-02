/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;
let i = 0;
let length = arr.length

for (; i < length; i++) {
    if(arr[i].charAt(0) == 'b') {
        result++;
    }
}

//export result
module.exports = result;