import React from 'react';
import './App.css';

let pizza: string = 'Salami' //объявляем формат
//pizza = 20 //даст ошибку

type Order = { //объявляем тип
  title: string,
  quantity?: number
}

const order: Order = {title: 'margarita'} //переменная заданого типа
const orders: Order[] = [ //массив переменных заданного типа
  {title: 'margarita'},
  {title: 'salami', quantity: 10}
]

let number: null | number = null //объединение типов
number = 10 //ошибки нет

type PrintTitle = (title: string) => string //обязательно нужно задать тип параметра
const printTitle: PrintTitle = (title) => {
  return title
}
console.log(printTitle('salami'))

type PrintTitle1 = (title: string) => void //это значит, что функция вообще ничего возвращать не будет
const printTitle1: PrintTitle1 = (title) => {
  console.log(title)
  return title
}

let s: unknown = printTitle1('test1')
console.log('ghj', s)

// function pitfall(): never {
// 	console.log(20)
// }


const test: unknown = 'test'
//console.log(test.trim()) //ошибка - не задан явно строчный формат

type X = { //объявляем тип
  a: string,
  b: number
}

type Y = X & { //объявляем тип и сразу расширяем его
  c: string,
  d: number
}

let objY = {
  a: 'Маша',
  b: 10,
  c: "Петя",
  d: 20
}

interface A { //объявляем  интерфейс
  a: string,
  b: number
}

interface B extends A { //объявляем  интерфейс и сразу расширяем его
  c: string,
  d: number
}

let objB = {
  a: 'Лена',
  b: 30,
  c: 'Федя',
  d: 40
}

function App() {
  return (
    <div className="App">
      New App!
    </div>
  );
}

export default App;
