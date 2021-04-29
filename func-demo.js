function sayHello(name) {
    console.log(`Hi there, it's ${name} here.`);
}


sayHello;  // this is the function reference.

sayHello("Snehomoy Maitra"); // this is function call.


function namastey() {
    return "Namastey Bhailog!";
}

var namasteyVariable = namastey;

// console.log(namastey());

console.log(namasteyVariable);
