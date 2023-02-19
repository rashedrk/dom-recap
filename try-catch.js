let a=9;
console.log(a);

// console.log(student);
console.log(99);

try {
    console.log("inside try");
    console.log(student);
    let student = 9;
    console.log("after error");
} catch (error) {
    //console.log(error);
    console.log("inside catch");
}
finally{
    console.log('inside finally');
}