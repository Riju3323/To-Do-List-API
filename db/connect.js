
const mongoose = require('mongoose');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Rijurekh:mt5nVGu9cRXpNiWz@backendpractice.orlsqdl.mongodb.net/task_list_api?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(uri).then(() => {
  console.log("Connected to DataBase")
}).catch((err) => {
  console.log(err)
});