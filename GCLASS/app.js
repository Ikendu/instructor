// import message from "./index";

newitem = 20

function changer() {
  let newitem = 40
  console.log(newitem)
}

changer()

// console.log(newitem);

// function handleChange() {
//   document.getElementById("scope").innerHTML = myItems;
// }
// message()

// let myArray = [
//   'Hello World!',
//   'This example demonstra method',
//   'Hello Worldssssss!.',
//   'This example demonstra methodssssssss.',
// ]

// console.log(myArray[0])

function validateForm() {
  let first = document.forms['form']['fname'].value
  let last = document.forms['form']['lname'].value
  let email = document.forms['form']['email'].value

  if (first == '') {
    alert('First Name must be filled out')
    return false
  } else if (last == '') {
    alert('Last Name must be filled out')
    return false
  } else if (email == '') {
    alert('Email must be filled out')
    return false
  } else {
    return true
  }
}

function typing() {
  let x = document.getElementById('email').value
  document.getElementById('demo').innerHTML = x
}

let myclass = document.getElementById('myclass')

myclass.addEventListener('click', myFunc)
myclass.addEventListener('mouseover', secondFunc)
myclass.addEventListener('mousedown', thirdFunc)

function myFunc() {
  alert('We are ending javascript soon')
  console.log('Always check the console whenever you have an error in your code')
}

function secondFunc() {
  myclass.innerHTML = 'Class Opened'
}
function thirdFunc() {
  myclass.style.color = 'red'
  myclass.style.backgroundColor = 'yellow'
  myclass.style.padding = '5px'
}
