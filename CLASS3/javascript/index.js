// console.log('turn 2 fan!')
// console.log('turn 2 fan!')
// console.log('turn 2 fan!')
// console.log('turn 2 fan!')
// console.log('turn 2 fan!')
// console.log('turn 2 fan!')

var message = 'turn our fan!'
let num = 2
const add = num + 3
const mult = num * 5
const sub = 12 - num

// console.log(num)
// console.log(add)
// console.log(mult)
// console.log(sub)

// console.log(message)
// console.log(message)
// console.log(message)
// console.log(message)
// console.log(message)
// console.log(message)

let power = 10 ** 3
// console.log(power)

let remender = 10 % 4
// console.log(remender)

let number = 5
let number2 = 10

// num = num + 5
num += 5
// console.log('Updated Num', num)

let firstname = 'Obi'
let lastname = 'Peter'

let fullname = firstname + ' ' + lastname
let name = firstname + lastname
// console.log(fullname)
// console.log(name)

let num1 = '4'
let num2 = '10'
let num3 = 10
// num3 -= 1

let name1 = 'Peter Obi'

// console.log((num1 * num2) / num3)

// function showMessage() {
//   console.log(message)
//   console.log(message)
//   console.log(message)
// }

// showMessage()
// showMessage()
// showMessage()

function addNums() {
  let num1 = 5
  let num2 = 10
  console.log('the result will show below')
  console.log(num1 + num2)
}

// addNums()

function addNumber(num1, num2, explaner) {
  console.log(explaner)
  console.log(num1 + num2)
}

// addNumber(50, 10, 'this is my result')
// addNumber(10, 10, 'See my result below')
// addNumber(50, 100, 'The result is below')

function addMult(num1, num2, str) {
  let add = num1 + num2
  let result = add * 10
  let output = str + ' ' + result
  return result
}

let result = addMult(10, 10, 'The result is') * 10
// console.log(result)

let car1 = { name: 'Camry', model: 2024, tyer: 4, color: 'black', price: '$20000' }
let car2 = {
  name: 'Ikenga',
  model: 2023,
  tyer: 6,
  color: 'white',
  price: '$100000',
  move: function () {
    console.log('Starting...')
    console.log('Moving...')
    return 'Wow I can finaly move'
  },
}

let val = car2.price

// console.log(val)
// console.log(car2.move())

let car3 = {}
car3.name = 'Toyota'
car3.model = 2020
car3.tyer = 4
car3.color = 'sky blue'
car3.price = '$22000'

// console.log(car3)
let values = Object.values(car3)
let props = Object.keys(car3)
let obj = Object.entries(car3)
// console.log(values)
// console.log(props)
// console.log(obj)

// let str = 'ABCDEFGfhjfgkjgjkgjlglhgjHIJKLMNOPQRSTUVWXYZ'
// let sentence = 'I will be done very soon'
// let position = sentence.at(-4)
// console.log(position)

// console.log(str.slice(5, 21))
// console.log(str.substring(5, 21))
// console.log(str.substr(5, 21))

// let num11 = 200
// let string = `he said "hello how are you" I'm coming ${sentence} ${num11}`
// console.log(string)
// let numStr = num11.toString()
// console.log(numStr)
// let decimalNum = 10.3948886686888
// let decimal = decimalNum.toFixed(2)
// console.log(Number(decimal) + 30)

// let myArray = ['Camry', 'blue', 4, 2024, 20000]
// console.log(myArray)
// console.log(myArray[0])
// console.log(myArray[1])
// myArray.push('Toyota')
// myArray.unshift('red')
// myArray.push(2020)
// myArray.push(22000)
// console.log(myArray)
// myArray.pop()
// // myArray.pop()
// // myArray.pop()
// myArray.shift()
// console.log(myArray)

// myArray[0] = 'Mercdecs'
// myArray[1] = 'black'
// myArray[3] = 2025

// console.log(myArray.length)
// let newArray = myArray.slice(1, 4)
// console.log(newArray)
// console.log(myArray.sort())

// const points = [40, 100, 1, 5, 25, 10]
// points.sort(sortfunct2)
// points.sort(sortFunct)
// console.log(points)

// function sortFunct(a, b) {
//   return a - b
// }

// function() {
//   console.log('My name is Peter')
// }
// const sortfunct2 = (a, b) => b - a

// let numArray = [10, 20, 30, 40, 50]
// let newArray = []

// console.log(numArray)

// numArray.forEach((val, idx) => {
//   newArray.push(val * idx)
// })

// console.log(newArray)

// let mapArray = numArray.map(function (val) {
//   return val + 20
// })
// console.log(mapArray)

// let filterArray = numArray.filter(function (val) {
//   return val < 40
// })

// console.log(filterArray)

// let num4 = 50
// const num5 = 50

// num4 = 60
// // num5 = 70
// let myTime = new Date()
// console.log(myTime)
// console.log(myTime.getMonth())
// let ceiler = Math.ceil(4.1)
// let floor = Math.floor(4.9)
// let round1 = Math.round(4.5)
// let round2 = Math.round(4.4)
// console.log('Ceiler=>', ceiler, 'Floorer=>', floor, 'Rounder=>', round1, 'Second Rounder=>', round2)
// console.log(Math.PI)

// console.log(3 ** 2)
// console.log(Math.pow(3, 2))

// console.log(Math.random() * 11)
// console.log(Math.floor(Math.random() * (11 - 5)) + 5)

// let randomNum = Array(10).fill(0)
// console.log(randomNum)

// randomNum = randomNum.map((val) => Math.floor(Math.random() * (11 - 5)) + 5)

// console.log(randomNum)

// if(what u are checking){
//   block of code to execute
// }

let numm = 100

// only if the condition is true
// if (numm != 10) {
//   console.log('It is greater')
//   console.log('Can you see that')
// }

// check both sides of the condition
// if (numm != 10) {
//   console.log('It is greater')
//   console.log('Can you see that')
// } else {
//   console.log('It is less')
//   console.log('Can you see that again')
// }

if (numm == 10) {
  console.log('It is equal')
} else if (numm > 10) {
  console.log('It is greater')
} else if (numm < 10) {
  console.log('It is less')
} else if (numm >= 10) {
  console.log('It is greater or equal')
} else if (numm <= 10) {
  console.log('It is less or equal')
} else {
  console.log('It is not equal')
}

// switch statement

let myDate = new Date().getDay()
let vary = 4

switch (vary) {
  case 0:
    console.log('Today is Sunday')
    break
  case 1:
    console.log('Today is Monday')
    break
  case 2:
    console.log('Today is Tuesday')
    break
  case 3:
    console.log('Today is Wednesday')
    break
  case 4:
    console.log('Today is Thursday')
    break
  case 5:
    console.log('Today is Friday')
    break
  case 6:
    console.log('Today is Saturday')
    break
  default:
    console.log('Today is not a day')
}

for (let i = 0; i < 100; i++) {
  console.log('This is a print out')
}
