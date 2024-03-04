const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://mongo:27017";
let db = null;

// // connect to mongo
// MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
//   console.log("Connected successfully to db server");

//   // connect to myproject database
//   db = client.db("myproject");
// });

// connect to mongo
MongoClient.connect(url, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected successfully to db server");
    // connect to myproject database
    db = client.db("myproject");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// create user account using the collection.insertOne function
function create(name, email, password, balance) {
  // TODO: populate this function based off the video
  return new Promise((resolve, reject) => {
    // checking if MongoDB connection is established.
    if (!db) {
      reject(new Error("MongoDB connection not established."));
      return;
    }

    const collection = db.collection("users");
    const doc = { name, email, password, balance };

    collection.insertOne(doc, { w: 1 }, (err, result) => {
      err ? reject(err) : resolve(doc);
    });
  });
}

// find user account
function find(email) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .find({ email: email })
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

// find user account
function findOne(email) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .findOne({ email: email })
      .then((doc) => resolve(doc))
      .catch((err) => reject(err));
  });
}

// update - deposit/withdraw amount
function update(email, amount) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .findOneAndUpdate(
        { email: email },
        { $inc: { balance: amount } },
        { returnOriginal: false },
        function (err, documents) {
          err ? reject(err) : resolve(documents);
        }
      );
  });
}

// return all users by using the collection.find method
function all() {
  // TODO: populate this function based off the video
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .find({})
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

module.exports = { create, findOne, find, update, all };
