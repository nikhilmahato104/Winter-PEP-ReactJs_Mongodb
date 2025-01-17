const person = (fistname ,lastname) =>{
    ({first : firstName,
    last :lastname});
    // return person;
}

console.log("punjab","lpu");


//what is computed properties in js
let Last_name  = "lastname";
let fullname = {
    firstName : "somaya",
    [Last_name] : "jain"
};
console.log("full name is  " + fullname.firstName + " " + fullname.lastname);