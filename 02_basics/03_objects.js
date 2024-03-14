// CREATING A SINGLETON OBJECT
//----------------------------------------

const singletonObject = new Object()
// console.log(singletonObject); // {} (empty object)

singletonObject.id = "123abc";
singletonObject.name = "rasika";
singletonObject.isLoggedIn = false;

// console.log(singletonObject); // { id: '123abc', name: 'rasika', isLoggedIn: false }

// DECLARING OBJECT WITH OBJECT LITERAL
//----------------------------------------

const objectLiteral = {}
// console.log(objectLiteral); // {} (empty object)

const regularUser = {
    email : "rasika@gmail.com",
    full_name : {
        userfullname : {
            first_name : "rasika",
            last_name : "khapate"
        }
    },
    gender : "female"
}

// console.log(regularUser.full_name.userfullname.last_name) // khapate

// console.log(regularUser.full_name?.userfullname.last_name)  // OPTIONAL CHAINING (will learn about it further)

// MERGING TWO OBJECTS
//------------------------------

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"d"}

const obj3 = {obj1,obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'd' } } (HERE ITS NOT MERGED RATHER JUST ATTACHED) // TOTALLY WRONG

// 1) 1st right method
const obj4 = Object.assign({}, obj1 , obj2)
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'd' }
// HERE ABOVE the syntax of object assign is ----- Object.assign(target,source) - meaning source will be merged in target, 
//and the syntax ---------- Object.assign({}, obj1,obj2) - its a good practice cause {} acts a traget(empty object)

// 2nd right and most used method (REST AND SPREAD)

const obj5 = {...obj1,...obj2}
// console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'd' }


// ACCESSING VALUES FROM A ARRAY OF OBJECTS
//---------------------------------------------------

const user = [
    {
        id: "123",
        isLoggedIn : false
    },
    {
        id: "124",
        isLoggedIn : false
    },
    {
        id: "125",
        isLoggedIn : false
    }
]

console.log(user[1].id); // 124

console.log(singletonObject);

const res1 = Object.keys(singletonObject) // WHEN WE SAY OBJECT.KEY, THIS WONT KNOW ON WHICH OBJECT TO EXTRACT VALUES FROM , HENCE SHUD GIVE VARIABLE INSIDE ()
console.log(res1); //[ 'id', 'name', 'isLoggedIn' ] ---------- V IMP , THE RETURNED OUTPUT IS AN ARRAY OF KEYS.

console.log(Object.values(singletonObject)); //[ '123abc', 'rasika', false ] ------- SAME WITH VALUES

console.log(Object.entries(singletonObject)); //[ [ 'id', '123abc' ], [ 'name', 'rasika' ], [ 'isLoggedIn', false ] ] ---------- EACH key : value pair is returned as array as well the whole object as array

console.log(singletonObject.hasOwnProperty("isLoggedIn")); //true ----- THIS IS LIKE OPTIONAL CHAINING 
console.log(singletonObject.hasOwnProperty("isLogged")); //false

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// DESTRUCTING:

const student = {
    name : "anjali",
    subject : "computerscience",
    grade : "A",
    roll_no : 21,
    isVaccinated : true
}

// let {name, grade, isVaccinated} = student
console.log(name); // anjali
let {name , grade , isVaccinated : isVac} = student
console.log(isVac); // true  --------------- destructed variable i.e, isVaccinated is redefined as isVac and this can be accessibel too

