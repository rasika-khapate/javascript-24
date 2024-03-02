// NUMBER

{
    let score = 24;

   // console.log(typeof score); // normal console.log  of identifier 
    //console.log(typeof (score)); // console.log of identifer as a method    
}

// STRING 
  
{

    let score = "24";

    //console.log(typeof score); // normal console.log  of identifier 
    //console.log(typeof (score)); // console.log of identifer as a method

}

// CONVSERSION OF DATATYPES

// 1. string to number ; use 'NUMBER'

{
    let score = "24"

    let valueInNumber = Number(score)
    // console.log(valueInNumber);
    // console.log(typeof valueInNumber);
}

// 4. number to string

{
    let score = 24
    let valueInString = String(score) 
    // console.log(valueInString);
    // console.log(typeof valueInString);
} 

// 3. number+alphabet into number 

{
    let score = "24abc"

    let valueInNumber = Number(score)
    console.log(valueInNumber); // NaN
    console.log(typeof valueInNumber); // number
}

// 4. number+alphabet into string

{
    let score = "24abc"

    let valueInNumber = String(score)
    console.log(valueInNumber); // 24abc
    console.log(typeof valueInNumber); // string
}

// 5. into boolean

{
    let score = 1
    let valueInString = Boolean(score) 
    console.log(valueInString); // true
    console.log(typeof valueInString); // boolean
} 

{
    let score = ""
    let valueInString = Boolean(score) 
    console.log(valueInString); // false
    console.log(typeof valueInString); // boolean
} 

{
    let score = "Rasika"
    let valueInString = Boolean(score) 
    console.log(valueInString); // true
    console.log(typeof valueInString); // boolean
} 

{
    let score = null
    let value = Number(score) 
    console.log(value); // 0
    console.log(typeof value); // number
} 

{
    let score = undefined
    let value = Number(score) 
    console.log(value); // NaN
    console.log(typeof value); // number
} 



