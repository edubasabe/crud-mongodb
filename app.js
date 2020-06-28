const mongoose = require('mongoose');

// Connecting to the database
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Defining a schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// Defining a collection/model
const Fruit = mongoose.model('Fruit', fruitSchema);

// Inserting a new items to the fruits collection
const fruit = new Fruit({
  name: 'Apple',
  rating: 7,
  review: 'Pretty solid as a fruit'
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

person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit"
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me"
});

const banana = new Fruit({
  name: "Banna",
  score: 3,
  review: "Weird texture"
});

// Inserting many items to the fruits collection
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits to fruitsDB");
//   }
// });

// Finding items in collection
Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    console.log(fruits.map(fruit => fruit.name));
  }
});