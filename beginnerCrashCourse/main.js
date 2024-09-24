// // Variables in JavaScript - var(global scope), let, const
// // Always use const, unless you know you are going to reassign the variable

// // Data types - String, Numbers, Boolean, null, undefined, Symbol

// const name = 'John';
// const age = 55;
 
// // Concatenation - old way
// console.log('My name is ' + name + ' and I am ' + age);
// //Concatenation new way - Template string - Use backticks
// //console.log(`My name is ${name} and I am ${age}`);
// const hello = `My name is ${name} and I am ${age}`
// console.log(hello);

// // String Manipulation
// const s = 'Hello World!';
// const y = 'BigData, Cybersecurity, AI, Web3'
// console.log(y.split(', ')); // Splits above string to array

// // Arrays
// // create arrays using object method or [] method
// const numbers = new Array(1,2,3,4,5)
// console.log(numbers);

// // Alternatively  using the square/normal method
// const fruits = ['Apple', 'Banana', 'Cherry', 'Det'];
// fruits.push('Orange'); // Adding to the array without index
// // push - adds to the end
// // unshift - adds at the beginning

// fruits.unshift('First Fruit');
// console.log(fruits);

// // Object literals
// // uses dot notation person.name
// // Destructuring
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'swimming', 'coding'],
//     address: {
//         street: '9000 Babcock Boulevard',
//         city: 'Pittsburg',
//         state: 'PA'
//     } 
// }

// //Decontructing - pulling out information
// const { firstName, lastName } = person;
// console.log(firstName);
// // Directly add propertied
// person.email = 'johndoe@gmail.com';
// console.log(person);

// // JSON
// // object -> JSON 
// // JSON.stringify(object)


// // Loops - for, while
// // array methods - forEach, map, filter

// // === matches the variable with the type, == without the type
// // Using ternary operators '?' -> Then
// const x = 10
// // if x is greater than 10 then assign red else assign blue
// const color = x > 10 ? 'red' : 'blue';

// single element selection
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// //multiple element selection
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('.item'));
// console.log(document.getElementsByTagName('li'));

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseout', (param) => {
//     param.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Error message disappers after 3sec
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
            ${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li);

        // Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}