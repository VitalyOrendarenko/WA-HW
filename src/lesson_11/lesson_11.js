import './lesson_11.scss';

// const products = [
//     {
//         title: 'Test',
//         price: '2500sdfsdfsdfs'
//     },
//     {
//         title: 'Test',
//         price: '2500'
//     },
//     {
//         title: 'Test',
//         price: '2500'
//     },
// ];
//
// function calcTotal(param) {
//     let total = 0;
//     for(let i = 0; i < param.length; i++) {
//         const number = Number(param[i].price);
//
//         if(isNaN (number) === false) {
//             total += number
//         }
//     }
//
//     return total;
// }
//
// const totalPrice = calcTotal(products);
// console.log(totalPrice);


//30.06.2018

function greeting () {
    console.log(this);
    console.log('My name is ' + this.name);
}

function Person (name, age) {
    this.name = name;
    this.age = age;
    this.greet = greeting;
}

function Developer(name, age, lang) {
    Person.call(this, name, age);
    this.lang = lang;
    this.develop = function () {
        console.log('Writting code at ' + this.lang);
    }
}

const person = new Person('John', 30);
const person2 = new Person('Jack', 35);
const js = new Developer('Jack', 34, 'js');
const dotNetDev = new Developer('Vasil', 20, 'c#');
const javaDev = new Developer('Kolya', 41, 'java');


person.greet();
person2.greet();
dotNetDev.Developer();
js.Developer();
javaDev.Developer();
debugger;



// function counter() {
//     const btn = document.querySelector('#btn');
//     let clickCounter = 0;
//     btn.addEventListener('click', () => {
//         clickCounter++;
//         console.log(clickCounter);
//     })
// }
//
// counter();

