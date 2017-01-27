var MongoClient = require('mongodb').MongoClient
  

// Connection URL
var url = 'mongodb://localhost:27017/TodoApp';

// Use connect method to connect to the server
MongoClient.connect(url, (err, db) =>{
  if(err){
  	return console.log("Unable to connect to MongoDB server")
  }
  console.log("Connected successfully to server");
  db.collection("Todos").insertOne({
  	text:"Something to Do",
  	completed: false
  },(err,res)=>{
  	if(err){
  		return console.log("Unable to insert todo",err);
  	}
  	console.log(JSON.stringify(res.ops,undefined,2));
  })
  db.close();
});
