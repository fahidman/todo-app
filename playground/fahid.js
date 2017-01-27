const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
MongoClient.connect('mongodb://localhost:27017/Fahid',(err,db)=>{
	if(err)
	{
		return console.log("Error: ",err)
	}
	console.log("Successfully connected to mongodb");

	// db.collection('Resume').insertOne({
	// 	_id: obj,
	// 	name: "Rahul",
	// 	age : 191,
	// 	hobbies: "Girls, All rounder, basketball",
	// 	Islam: false

	// },(err,res)=>{
	// 	console.log(res.ops)
	// })

	// db.collection('Resume').find().count().then((count)=>{
	// 	console.log(`The Resume collection count : ${count}`)
	// },(err)=>{
	// 	console.log("unable to fetch todos",err)
	// });

	db.collection('Resume').find({name: "Rahul"}).count().then((docs)=>{
		console.log(docs);
	},(err)=>{
		console.log(err)
	})
	// db.collection('Resume').count((err,count))
	db.close();
})