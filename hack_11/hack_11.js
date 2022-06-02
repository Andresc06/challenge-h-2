/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

result = numberArray.concat(stringArray);

result[0] = 'one';
result[2] = 'three';
result[4] = 'five';

let i = 0
result.map(function(e) {
    if (e == 'foo') result[i] = 'f00';

    if (e == 'bar')  result[i] = 'Bar';

    if (e == 'baz') result[i] = 'b@z';

    if (e == 'qux') result[i] = 'quX';

    if (e == 'echo') result[i] = '3ch0';
    i++
})

result.unshift('h@ck');
result.push('h@ck');
result.splice(numberArray.length + 1, 0, 'h@ck');



//export result
module.exports = result;