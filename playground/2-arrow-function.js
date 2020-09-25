// const square = function (x) {
//    return x * x
// }

// const square = x => {
//    return x * x
// }

// const square = (x) => x * x

// console.log(square(6168161))

// const event = {
//    name: 'Birthday Party',
//    printGuestList: function () {
//       console.log('Guest list for', this.name)
//    }
// }

const event = {
   name: 'Birthday Party',
   guestList: ['Daniel', 'Jen', 'Mike'],
   printGuestList() {
      console.log('Guest list for', this.name)
      this.guestList.forEach(obj => console.log(obj + ' is attending ' + this.name))
   }
}

event.printGuestList()