
// function addnumber (x,y) {
//     let total = x + y;
//     alert (total);
// console.log(addnumer);
// }

// addnumber(4,5);


// multiply 2 number
// function multiply (x,y) {
//     let results = x * y;
//     console.log(results);
// }

// multiply(10,5);


// write function that takes two number and results multiply by 2 number
        // function result (x,y){
        //     let total = (x + y)*2;
        //     console.log(total);
        // }
        // result(5,8)

function addition(a, b){
    let results = a + b
    return results
}

function multiply(a,b)  {
    let results = a * b
    return results
}

function complicatedOperation(number_1, number_2) {
    let sum = addition(number_1, number_2)
    let results = multiply(sum, number_2)
    return results
}

const value = complicatedOperation (3,8)
console.log(value)



// function readMyH1() {
//     let results = document.getElementsByTagName('h1')
//     let text = results[0].innerHTML
//     console.log (text)
// }

// readMyH1()

function addElements() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let display = document.getElementById("display");


    let number1Value = parseInt(number1.innerHTML);
    let number2Value = parseInt(number2.innerHTML);

    let results = addition(number1Value, number2Value);
    console.log (results)

    display.innerHTML = results;
}
addElements()