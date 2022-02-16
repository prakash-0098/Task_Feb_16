const person = {
    name: "Akash",
    mobile: 999999999,
    address: {
        pincode: 1234,
        city: "gurgaon",
        state: "haryana",
        emails: ["asd@gmail.com", "abc@yahoo.com", "rty@hotmail.com"],
    },
};


/**
 * 
 * 
 * make a copy of the person object and in that copy 
 * change its name to "Rahul",  
 * pincode to 4567 
 * and first email in the list to 'asd@outlook.com'
 * 
 * make sure that original person is not affected by these operation
 * 
 *  your new person should look like this 
 * const newPerson = {
    name:"Rahul",
    mobile:999999999,
    address:{
        pincode:4567,
        city:"gurgaon",
        state:"haryana",
        emails:['asd@outlook.com', 'abc@yahoo.com', 'rty@hotmail.com']
    }
}
  
 *  CAUTION: DO NOT USE JSON.parse(JSON.stringify())
    Hint: use destructuring at every level, i.e. copy each level shallowly
 */

const result = {...person};          
result.name = "Rahul"; 
const address = {...person.address}; 
address.pincode = 4567; 

let emailArray = Array.from(person.address.emails); 
emailArray[0] = "asd@outlook.com"; 

const newPerson = result; 
newPerson.address = address; 
newPerson.address.emails= emailArray; 

console.log(newPerson); 

console.log(person)



/**
 * explain the difference between primitive and non primitive data types when we use the following operator
 * 1. assignment operator
 * 2. equality operator
 *
 *
 */


/**
Ans: 
    1. In the case of primitive data types, it assign the value of variables whereas on non-primitive data types it assign its references/addresses.

    2. In the case of primitive data types, it checks the equality of two variables of different memory block which returns true,
        i.e., a = 1; 
              b = 1; 
              if(a ==== b) then it returns true
        but, in the case of non-primitive data types, it checks its references; 
        i.e,.
            a = [1, 2]; 
            b = [1, 2]; 
            if(a ==== b) then it returns false; means the address not same of these two array.
 */




