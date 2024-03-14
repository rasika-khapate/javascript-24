// Two ways to declare an object -

//1) constructor (when you declare object like constructor singleton object is created meaning, it is only one object of its kind)
// Object.create - this is constructor method, iski k andar singleton banta hai

// 2)Object Literal (multiple instances are created)

const mySym = Symbol("key")

const JsUser = {
    name : "Rasika",
    "full_name" : "Rasika Khapate", // - will HAVE to access this key with square braces, cant be accessed with .key method
    Age : 24,
    [mySym] : "anotherKey", // this is the syntax of defining symbol's datatype variable as a key in object
    email : "rasika@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday","Saturday"]
}

// console.log(JsUser.name); // accessing value thru .key method // Rasika
// console.log(JsUser["full_name"]); //Rasika Khapate 
// // console.log(JsUser.mySym); //anotherKey - the output is correct , but the dataype here is not symbol , but is a string
// // console.log(typeof JsUser.mySym); //string

// // REASON - javascript considers the "key" as a string by default , and so to access the value of a key by [] square braces method, ***variable[""]*** is the systax, this syntax is majorly useful useful while printing Symbol dataype's key in an object 

// console.log(typeof JsUser[mySym]); //anotherKey

JsUser.email = "rasika@google.com"
// Object.freeze(JsUser)
JsUser.email = "rasika@chatgpt.com"
// console.log(JsUser);

// //{
//     name: 'Rasika',
//     full_name: 'Rasika Khapate',
//     Age: 24,
//     email: 'rasika@google.com', ----------------------------------- email didnt overwrite to rasika@chatgpt.com after using object freeze since this doesnt allow overwriting of objects.
//     isLoggedIn: false,
//     lastLoggedInDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key)]: 'anotherKey'  ----------------------- symbol key
//   }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// ADDING A FUNCTION IN OBJECT

//functions in javascript are treated as 1st type citizen meaning there is no discrimination as such with functions, they can also be treated as VARIABLES

JsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting); //[Function (anonymous)] - HERE function is not executed, but functions reference is returned.

console.log(JsUser.greeting()); //Hello JS User undefined(nothing ignore this undefined)


JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.full_name}`);
}

// HERE this keyword is used to access any value of that particular object, to refer to the same object

console.log(JsUser.greetingTwo()); //Hello Js User , Rasika Khapate


