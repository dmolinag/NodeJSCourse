// CRUD
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectID;

const { MongoClient, ObjectID, DBRef } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (e, client) => {
   if (e) {
      return console.log('Unable to connect to database')
   }

   const db = client.db(databaseName)

   // Insert single document into a collection
   // db.collection('users').insertOne({
   //    name: 'Daniel',
   //    age: 28
   // }, (error, result) => {
   //    if (error) {
   //       return console.log('Unable to insert user')
   //    } 

   //    console.log(result.ops);
   // })

   // db.collection('users').insertMany([
   //    {
   //       name: 'Jen',
   //       age: 28
   //    },
   //    {
   //       name: 'Gunther',
   //       age: 25
   //    }
   // ], (error, result) => {
   //    if(error) {
   //       return console.log('Unable to insert user')
   //    }

   //    console.log(result.ops)
   // })

   // db.collection('tasks').insertMany([
   //    {
   //       description: 'Finish the goal',
   //       completed: true
   //    },
   //    {
   //       description: 'Finish the course',
   //       completed: false
   //    },
   //    {
   //       description: 'Master NodeJS ',
   //       completed: false
   //    }
   // ], (error, result) => {
   //    if(error) {
   //       return console.log('Unable to insert tasks')
   //    }

   //    console.log(result.ops)
   // })

   // db.collection('tasks').findOne({ name: 'Daniel' }, (error, user) => {
   //    if (error) {
   //       return console.log('Unable to fetch')
   //    }

   //    console.log(user)
   // })


   // db.collection('tasks').find({ completed: false }).toArray( (error, users) => {
   //    if (error) {
   //       return console.log('Unable to fetch')
   //    }

   //    console.log(users)
   // })

   // db.collection('tasks').find({ name: 'Daniel' }).count( (error, count) => {
   //    if (error) {
   //       return console.log('Unable to fetch')
   //    }

   //    console.log(count)
   // })

   // db.collection('users').updateOne({
   //    _id: new ObjectID("5f5d2201cf6f4782e8a1afa4")
   // }, {
   //    $inc: {
   //       age: 1
   //    }
   //    // $set: {
   //    //    name: "Daniel2"
   //    // }
   // }).then((result) => {
   //    console.log(result)
   // }).catch((error) => {
   //    console.log(error)
   // }) 

   // db.collection('tasks').updateMany({
   //    completed: false
   // }, {
   //    $set: {
   //       completed: true
   //    }
   //    // $set: {
   //    //    name: "Daniel2"
   //    // }
   // }).then((result) => {
   //    console.log(result.matchedCount)
   // }).catch((error) => {
   //    console.log(error)
   // })

   db.collection('users').deleteMany({
      age: 27
   }).then((result) => {
      console.log(result)
   }).catch((error) => {
      console.log(error)
   })

   db.collection('tasks').deleteOne({
      description: "Master NodeJS "
   }).then((result) => {
      console.log(result)
   }).catch((error) => {
      console.log(error)
   })



})

