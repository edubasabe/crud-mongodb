const mongoose = require('mongoose');

// Connecting to the database
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Defining a schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String,
});

// Defining a collection/model
const Fruit = mongoose.model('Fruit', fruitSchema);

// Inserting a new items to the fruits collection
const fruit = new Fruit({
  rating: 10,
  review: 'Peaches are so yummy!'
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: "John",
  age: 37
});

// person.save();


// Finding items in collection
Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    console.log(fruits.map(fruit => fruit.name));
  }
});

// Update an item in collection
// Fruit.updateOne({_id: "5ef906f35181694f3f36d914"}, {name: "Peach"}, function(err ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully updated!");
//   }
// })

// Delete an item in collection
// Fruit.deleteOne({_id: "5ef906f35181694f3f36d914"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted!");
//   }
// });

// Person.deleteMany({name: /John/}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully many items deleted!");
//   }
// });