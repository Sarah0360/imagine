const btn = document.getElementById('btn');
        btn.onclick = function() {
            const name = prompt(' Enter your full name.');
            document.getElementById('name').innerText = name;
        }

// variables
const pi = 3.142;
let username = 'meddy';
let age = 200;
let present = false;

// objects
const person = { 
username: 'meddy',
age: 200,
present: false,
child: {
    name: 'J',
    friend: {
        name: 'k',
    }
}
}
console.log(person.age);
person.age = 90;
console.log(person);




// Arrays
const bottle1 = {
    size: 'large',
    color: 'yellow'
  }
  
  const bottle2 = {
    size: 'small',
    color: 'blue'
  }
  
  const bottles = [bottle1, bottle2]
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[0];
  bottles[0].size;
  
  const date = new Date();
  date.getDay();
  
  // if else
//    const age = 18;
  if (age >= 18) {
    'You Are True';
  } else {
    'You Are False';
  }
  
  // for loop
  for (let i = 0; i <= 5; i+=1) {
   console.log('We did it!', i );
  }
  
  
  
  
  
  
  // Functions
// Defining a Function
function login (username, password) {
  // Validte The Username and Password
  if (!username || !password) {
    return 'username or password not provided';
  }
  // Verify Username and Password
  if (username == 'ekua' && password == '1234')
    { return 'user is logged in';} else { return 'Invalid username or password';   }
}
// Invoking a Function
login('ekua');



// Basic Arithmetic Operations
11 + 12;
1 + 0.5;
43 - 12;
45 / 7;
9 * 9;
14 % 3;

// Built in Math Functions
Math.floor(45 /24);
Math.random() * 10;

Math.max(34, 32, 37);

// Handling User Input
// NAN
'2'+ '2'
Number ('2') +2
Number ('ty') +2
// strings in JavaScript
// Concatenation
const firstname = 'ekua';
const lastname = 'A';
const middlename =
firstname + ' ' + lastname;

// Template literal
`${firstname} ${lastname}`;



// String Methods

let fullName = "Ekua A"

fullName.length
fullName.toLowerCase()
fullName.toUpperCase()
fullName.charAt(3)
fullName.slice(0,4)
fullName.split("");
fullName.replace("A", "Med");
fullName.indexOf("kua");

//string conversion
Number ("3.243")
parseInt("3.243")
parseFloat("3.243")
let amount = 18000
console.log(`GHS${amount}`)
amount.toString()


// Write a funtion that will add a participant to our Google classroom
// let user_email = 'example@email.com'
// let password = 'orange'
const participants = [];
function addParticipant(email) {
  // Check if email was provided NOTE: short hand "if (!email)"
  if (email===undefined|| email===null)  {
    return 'No email provided';
  }
  // Check if email is valid
  if (!email.includes('@'&&'.com')) {
    return 'Invalid email provided'
  }
  // Add email to participants
  participants.push(email);
  return 'Participant added!';
}

addParticipant('example@gmail.com');
addParticipant()
addParticipant('example@')
// addParticipant('example@.com')
addParticipant('example@gmail.com')
participants;




// Arrays In JavaScript
const users = [
  {
    username: 'meddy',
    password: '1234',
    email: 'example@gmail.com'
  },
  {
    username:'darah',
    password:'12345',
    email:'darah@gmail.com'
  }
]
<!-- invoking arrays -->
users;



// Write a funtion that will take a user with firstname, lastname and return fullname;

function fullName(user) {
  return {...user,
          fullName: `${user.firstname} ${user.lastname}`
          };
}

const user = {
  firstname: 'ekua',
  lastname: 'A'
}

fullName(user);


// Array map
const users = [
  {firstname: 'ekua', lastname:'A'},
  {firstname: 'bella', lastname:'D'},
  {firstname: 'afia', lastname:'Tyson'},
  {firstname: 'ana', lastname:'Belle'},
  {firstname: 'livy', lastname:'Devon'},
]

users.map(fullName);




// Square of Numbers
function square(x) {
  return x*x        
};

square(2);

const numbers = [1, 9, 9, 8];
numbers.map(square);


// Array filter

function isEven(number) {
  // if numbers divided by two, has no remainder
  return number % 2 === 0;        
}

isEven(9);
numbers.filter(isEven)

function isOdd(number) {
  // if numbers divided by two, has a remainder
  return number % 2 !== 0;        
}

isOdd(9);
numbers.filter(is0dd)





// Write a function that will allow a user to reset their password
// const user = {
//   email: 'example@gmail.com',
//   password: '1234'
// }

function resetPassword(email, newPassword) {
  // Check if email and new password was provided
  if (!email || !newPassword) {
    return 'Email or Password not provided'
  }
  // Check if provided email is correct
  if (email !==user.email) {
    return 'Incorrect email'
  }
  
  // update password with new one
  user.password = newPassword;
  return 'password reset'
}

user;
resetPassword('example@gmail.com', '99900')
user;



// You have been give an array of students with some of them marked as absent and others marked as present.
// Write a function that returns the total number of students present
const students = [
  {id: 1, present: true},
  {id: 2, present: true},
  {id: 3, present: false},
  {id: 4, present: true},
  {id: 5, present: false},
]

function studentsPresent () {
  // Define a variable to track the total present
  let total = 0;
  // Begin a loop
  for (let i = 0; i < students.length; i++){
    // for any iteration if student is present then increase total present by 1;
    if (students[i].present===true) {
      total++
    }
  }
   return total;
}

studentsPresent(students);

// Classes in JavaScript
class Laptop {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

const laptop1 = new Laptop ('Dell', 'black');
const laptop2 = new Laptop ('HP', 'silver');
laptop1.brand;
laptop2.brand;   
