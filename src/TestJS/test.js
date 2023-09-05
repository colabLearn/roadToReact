
const people = [
    //Each element inside this array is an object 
    //representing a single person
    {name: "Dom",
     age: 35,
     Occupation: "Web Developer" 
    },
    {
    name: "Amy",
     age: 26,
     Occupation: "Nurse"
    },
    {
        name: "Bruce",
         age: 55,
         Occupation: "Electrician"
    }

]

/*
MAP method:
* We will be using the map method to give us 
a new array of each person's name.
*/
const names = people.map(function(person){
    return person.name
})

/*
 FILTER:
 Applying filter to return only person object in the list
 that their age is over 30.
*/
const over30 = people.filter(function(person){
    return person.age>=30
}).map(function(person){
    return person.name
})


/*
REDUCE:
The reduce method is used to reduce your array
into a single value.
Let's say we want to find the total of the age of 
all the people in our list i.e. total of the age. 
For example in our case, 35+26+55.
*/
const totalAge = people.reduce(function(total, person){
    return total + person.age
}, 0)
/*
total is the variable initialized to zero, --> " '...}, 0)' in the code
then each person age is added to total as the function iterate the people
list. 
*/

console.log(totalAge)