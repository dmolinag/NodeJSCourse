// setTimeout(() => {
//    console.log('Two seconds are up')
// }, 2000)

// const names = ['Daniel', 'Jen', 'Jess'];
// const shorNames = names.filter((name) => {
//    return name.length <= 4
// })

// const geocode = (address, callback) => {
//    setTimeout(() => {
//       const data = {
//          latitude: 51.213336,
//          longitude: 4.392089
//       }
//       callback(data)
//    }, 2000)
// }

// geocode('Manizales', (data) => {
//    console.log(data)
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (number1, number2, callback) => {
//    setTimeout(() => {
//       callback(number1 + number2)
//    }, 2000)
// }

// add(1,4,(data) => {
//    console.log(data)
// })
const doWorkCallback = (callback) => {
   setTimeout(() => {
      // callback('This is my error', undefined)
      callback(undefined, [1, 4, 7])

   }, 2000)

}

doWorkCallback((error, result) => {
   if (error) {
      return console.log(error)
   }

   console.log(result)
})