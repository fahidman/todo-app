const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
	if(err)
		console.log("Error connecting to db: ",err)
	console.log("mongodb successfully connected");

   // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((res)=>{
   // 	console.log(res)
   // },(err)=>{
   // 	console.log(err)
   // })
	db.collection('Todos').findOneAndDelete({_id : new ObjectID('588c12846fadb9f976039718')}).then((res)=>{
		console.log(res)
	})
	db.collection('Todos').deleteMany({completed:false})
	db.close();
})