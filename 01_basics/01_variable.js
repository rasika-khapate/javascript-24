// const accountDistrict; // CONST ; syntaxerror; Cannot declare without initialization

// {
//     const accountId = 1234
// const accountId = 4567
// // console.log(accountId)
// }

// {
// const accountId = 1234
// const accountId = 4567
// }
// console.log(accountId)


/* The above example is for RE-DECLARATION
"SyntaxError: Identifier 'accountId' has already been declared ;;; Cannot re-declared (using accountId again)" WITH OR WITHOUT SAME SCOPE
*/

// {
//     const accountNum = 1234
// accountNum = 7890
// console.log(accountNum)
// }

// {
//     const accountNum = 1234
// accountNum = 7890
// }
// console.log(accountNum)



/*The above example is for RE-ASSIGNMENT
"TypeError: Assignment to constant variable ;;; cannot re-assign (changing the value to 7890)" WITH OR WITHOUT SAME SCOPE
*/

// ==============================================================================================================


// {
// let sum = 234
// let sum = 567
// console.log(sum);
// }

// {
// let sum = 234
// let sum = 567
// }
// console.log(sum); 

// BOTH ABOVE CODES WILL THROW SAME ERROR WHICH IS : HERE THE ERROR IS "Identifier 'sum' has already been declared" since first code will see sum being re-declared within same scope.

// CANNOT BE RE-DECLARED WITHIN SAME SCOPE

{
let sum = 234
console.log(sum);
}

let sum = 567
console.log(sum);

// CAN BE RE-DECLARED IF IDENTIFIER 'SUM' IS DECLARED AGAIN "OUTSIDE" SCOPE.

// {
//     let a = 40
//     a = 50
// }
// console.log(a); // Reference error : a cannot be defined since let is block scope and consol.log(a) is outside block and identifier a is not accesible outside "{}" block

{
    let b = 30
b = 20
console.log(b);
}

{
    let b = 80
}
b = 90
console.log(b);

// CAN BE RE-ASSIGNMENT and here above code is not throwing any error because identifier b is reassigned outside {} and its logged outside block as well.

{
    let c;  
    console.log(c);
}


// CAN be initialized without delaration. // "UNIDENTIFIED"

// {
//     let c;  
// }
// console.log(c);

//ReferenceError: c is not defined


//===============================================================================================================

{
    var num = 1
    num = 2
    console.log(num)
}

console.log(num) // Identifier num is functional scOpe hence can be accessed outside scope.

{
    var num1 = 40
    var num1 = 50   
}

console.log(num1)

// CAN BE RE-DECLARED

{
    var num1 = 60
    num1 = 70
    // console.log(num1)
}
num1 = 100

console.log(num1)

// CAN BE RE-ASSIGNED

{
    var account;
}

console.log(account);

// CAN BE DECLARED WITHOUT INITIALIZATION. // "UNIDENTIFIED"