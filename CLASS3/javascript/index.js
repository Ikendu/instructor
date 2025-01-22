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

addNums()

function addNumber(num1, num2, explaner) {
  console.log(explaner)
  console.log(num1 + num2)
}

addNumber(50, 10, 'this is my result')
addNumber(10, 10, 'See my result below')
addNumber(50, 100, 'The result is below')

function addMult(num1, num2, str) {
  let add = num1 + num2
  let result = add * 10
  let output = str + ' ' + result
  return output
}

let result = addMult(10, 10, 'The result is')
console.log(result)
