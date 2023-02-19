// first way is to check the type
const number = '23';
// number , string , boolean
if (typeof number == 'number') {
    console.log('value is a number');
} else {
    console.log('value is not a number');
}

const numbers = [1,2,3,4];
// console.log(typeof numbers);
console.log(Array.isArray(numbers));

const students = {name: 'rafsan', work:'student'}
console.log(typeof students);

console.log(isNaN(3));
console.log(isNaN('3'));
console.log(isNaN('ab'));