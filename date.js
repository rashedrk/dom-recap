const today = new Date();
console.log(today);

const date1 = new Date('1971-12-12');
const date2 = new Date('1971-3-4');

if (date1.getTime() > date2.getTime()) {
    console.log('march is before dec');
} else {
    console.log('march is not before dec');
}