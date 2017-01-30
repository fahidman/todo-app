const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
	if(err)
		console.log("Error connecting to db: ",err)
	console.log("mongodb successfully connected");

   // db.collection('Todos').findOneAndUpdate({completed:true},
   // 	{$set:{	completed: false	}
   // },{
   // 	returnOriginal: false
   // }).then((res)=>{
   // 	console.log(res);
   // },(err)=>{
   // 	console.log(err);
   // })

   db.collection("Users").findOneAndUpdate({name:"Asshole"},{
   	$set:{
   		name: "Rahul"
   	},
   	$inc:{
   		age: 500
   	} 
   },{
   	returnOriginal: false
   }).then((res)=>{
   	console.log(res);
   },(err)=>{
   	console.log(err);
   })

	db.close();
})