var array_ = process.argv;
var summ_array = array_.slice(2, array_.length);
var sum = 0;

for (var i = 0; i < summ_array.length; i++) {
    sum += Number(summ_array[i]);
}

console.log(sum)