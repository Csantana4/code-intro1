// console.log("hello world") 

// let thing = "Rocketship"
// thing = "Mihoyminoy"
// console.log(thing)

// let newThing = 10
// newThing = 5
// console.log(newThing)

// const firstName = "Christian"
// let age = 16
// let isCool = true

// console.log(`Name:${firstName}. Age: ${age}.`)
// // if(isCool === true){
// // console.log("this person is pretty dope.")
// // } else {
// //     console.log("this person need to git good.")
// // }
// if(isCool && age > 17){
//     console.log("this person is still cool, and they arent even a kid!") 
// } else if(isCool) {
//     Console.log("this person is cool, but thats to be expceted.")
// } else {
//     console.log("they arent cool :(")
// }

// let a = 17
// let b = 5
// let c = 2
// let x = 20



// let answer = a + (c * b)
// console.log(answer)

const readline = require('readline')

const reader = readline.createInterface({input: process.stdin, output: process.stdout})

// reader.question("Hey there! what's your name?", function(response) {
//     console.log(`Hello ${response}`)
// })

reader.question("Let me guess a number! Pick a number between 1-10", function(num) {
    if(num >= 1 && num <= 10) {
        console.log(`hmmm... I think your number was ${num}.`)
    } else {
        console.log ("HEY! I SAID BETWEEN 1 AND 10!")
    }
   
})