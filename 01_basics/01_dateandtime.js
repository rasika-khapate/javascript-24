// Date is an abject in javascript which represent a single moment in time in a platform independent format since "Jan 1 1970"

// Whatever initial date and time we gete(without applying any methods) , it is that many miliseconds from jan 1 1970

// FUTURE - "temporal" proposal to make this date object as a global object , much like "Math" object to ease the use of date object.

// Type of date is OBJECT.

// ************************************************************************************************************//


// let myDate = new Date() // creating an instance/object // THIS IS AN OBJECT 
// // console.log(myDate); //2024-03-11T18:16:37.440Z (ORIGINAL FORMAT)
// console.log(typeof myDate); // object

// {
//     let myCreatedDate = Date() // declaring date object like how we normally declare // THIS IS A STRING
// // console.log(myCreatedDate); //Mon Mar 11 2024 18:29:04 GMT+0000 (Coordinated Universal Time)
// console.log(typeof myCreatedDate); // string

// }



//-------------------------------------------------
// how to use this date object practically
//-------------------------------------------------

// console.log(myDate.toString()); //Mon Mar 11 2024 18:17:46 GMT+0000 (Coordinated Universal Time) (little readable)

// console.log(myDate.toDateString()); //Mon Mar 11 2024
 
// console.log(myDate.toISOString()); // 2024-03-11T19:00:39.006Z

// console.log(myDate.toJSON()); //2024-03-11T18:21:47.558Z

// console.log(myDate.toLocaleDateString()); //3/11/2024 (mm-dd-yyyy) 

// console.log(myDate.toLocaleString()); //3/11/2024, 6:23:12 PM (GIVES TIME DATE AND TIME STAMP AS WELL)

// console.log(myDate.toLocaleTimeString()); //6:23:36 PM

// ************************************************************************************************************//

//-------------------------------------------------
//HOW to declare our own defined date
//-------------------------------------------------

// let myCreatedDate = Date()
// console.log(myCreatedDate); //Mon Mar 11 2024 18:29:04 GMT+0000 (Coordinated Universal Time) (SAME AS toString())

// If we want to pass our own date as parameters 


// myCreatedDate = Date(2024,0,8)
// console.log(myCreatedDate); // Mon Mar 11 2024 18:53:20 GMT+0000 (Coordinated Universal Time) (EVEN IF WE PASS AN VALUE WE WANT TO DECLARE, IT WONT TAKE IT AS THE TYPE IS STRING, HENCE OUTPUT WOULD BE SAME AS toString() method)
// console.log(typeof myCreatedDate);

// let myNewCreatedDate = new Date(2024,0,8) // Creating an instance/object (HERE WE CAN PASS AN PARAMETER OF DESIRED DATE) (IN JAVASCRIPT , MONTH STARTS FROM 0 WHEN WE DECLARE IN ARRAY)
// console.log(myNewCreatedDate.toDateString()); //Mon Jan 08 2024

// {
//     let myNewCreatedDate = new Date(2024,0,8,11,11);
//     console.log(myNewCreatedDate.toLocaleString()); //  1/8/2024, 11:11:00 AM
// }

// let myBrandNewDate = new Date("2024-01-23") // (HERE SINCE WE ARE DECLARING DATE IN STRING , IT STARTS WITH 1 ITSELF ) // YYYY-DD-MM FORMAT

// let myBrandNewDate = new Date("01-29-2024")   // MM-DD-YYYY FORMAT 
// // NOTE : DD-MM-YYYY IS AN "Invalid Date"
// console.log(myBrandNewDate.toDateString()); // Tue Jan 23 2024 
// console.log(myBrandNewDate.toLocaleString()); // 1/23/2024, 12:00:00 AM

//+++++++++++++++++++++++++++++++++++++++++++++ TIME ++++++++++++++++++++++++++++++++++++++++++++++++++== //

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1710184494831 - no of milisecond passed since Jan 1 1970

// console.log(myTimeStamp/1000);  // TO CONVERT IT INTO SECONDS // 1710184928.125 (BUT WE GET A DECIMAL VALUE)

// console.log(Math.floor(myTimeStamp/1000)); // 1710184928 - USING MATH.floor() to single absolute value.

// console.log(typeof myTimeStamp); // obviously number

// COMPARING TIME ( BETWEEN JAN 1 1970 AND DEFINED DATE)
// {
//     let myBrandNewDate = new Date("01-29-2024") 
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myBrandNewDate.getTime()); // myBrandNewDate is an object , hence we can extract "getTime()" mathod from it to get the value in miliseconds and compare it with original time
// }

let newDate = new Date();
console.log(newDate.toLocaleDateString('default' , {
    weekday : "long",
}));

// toLocaleString is a very special method because we can pass objects as parameters in it

// Monday


