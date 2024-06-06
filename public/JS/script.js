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
  
  
  
  
  
  
  