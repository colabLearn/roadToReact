
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


console.log(names)