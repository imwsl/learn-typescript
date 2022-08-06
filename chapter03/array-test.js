var arr1 = ['f'];
arr1.push('e');
// arr1.push(true) tsc会出现错误，因为需要保证数组的一致性
function buildArray() {
    var a = []; // any
    a.push(1); // number[]
    a.push('x'); // (string | number)[]
    return a;
}
var myArray = buildArray();
myArray.push('g');
