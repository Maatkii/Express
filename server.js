const express = require("express");
const mongoose = require("mongoose");
const Person = require("./personModel");
require("dotenv").config();
const app = express();
const PORT = 4000;
const MONGO_URI = process.env.MONGO_URI;
app.use(express.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
app.use(express.json());

const arrayOfPeople = [
  { name: "Eya", age: "20", phoneNumber: ["55158180"] },
  { name: "isra", age: "21", phoneNumber: ["23256547"] },
];

Person.create(arrayOfPeople, function (err, people) {
  if (err) {
    console.error(err);
  } else {
    console.log(people);
  }
});
Person.find({ name: "grorge gik" }, function (err, people) {
  if (err) {
    console.error(err);
  } else {
    console.log(people);
  }
});
Person.findOne({ phoneNumber: "23256547" }, function (err, people) {
  if (err) {
    console.error(err);
  } else {
    console.log(people);
  }
});
const personId = "";
Person.findById(personId, function (err, people) {
  if (err) {
    console.error(err);
  } else {
    console.log(people);
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
