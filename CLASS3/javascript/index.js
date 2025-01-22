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

let str = 'ABCDEFGfhjfgkjgjkgjlglhgjHIJKLMNOPQRSTUVWXYZ'
let sentence = 'I will be done very soon'
let position = sentence.at(-4)
console.log(position)

console.log(str.slice(5, 21))
console.log(str.substring(5, 21))
console.log(str.substr(5, 21))

let num11 = 200
let string = `he said "hello how are you" I'm coming ${sentence} ${num11}`
console.log(string)
