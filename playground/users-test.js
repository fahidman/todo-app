const {MongoClient,ObjectID} = require('mongodb');
var school ={teacher: "Fahid", principal: "Divya"}
var {principal,teacher} = school;
console.log(principal);
console.log(teacher)
var obj = new ObjectID();
console.log(obj.getTimestamp());
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err)
	{
		return console.log("Unable to connect to the server.",err);
	}
	console.log("MongoDB sucessfully connected");
	// db.collection("Users").insertOne({
	// 	name: "Fahid",
	// 	age: 19,
	// 	location: "Coimbatore"
	// },(err,results)=>{
	// 	if(err){
	// 		return console.log("Unable to insert",err)
	// 	}
	// 	console.log(JSON.stringify(results.ops[0]._id.getTimestamp(),undefined,2))
	// })
db.close();
})