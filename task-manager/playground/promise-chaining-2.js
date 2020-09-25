require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f5e75177f84972e0c36f7d1').then((task) => {
//    // Task.deleteOne({_id: '5f5e75177f84972e0c36f7d1'}).then((task) => {
//    console.log(task)
//    return Task.countDocuments({ completed: false })
// }).then((result) => {
//    console.log(result)
// }).catch((e) => {
//    console.log(e)
// })

const deleteTaskAndCount = async (id) => {
   await Task.findByIdAndDelete(id)
   const count = await Task.countDocuments({ completed: false })

   return count
}

deleteTaskAndCount('5f5e75206032480608497b25').then((count) => {
   console.log(count)
}).catch((e) => {
   console.log('error', e)
})