const mongoose = require('./db/mongoose.js').mongoose;
var User = mongoose.model('users',{
	email:{
		type: String,
		trim: true,
		minlength: 1,
		required: true
	}
})

module.exports = {
	User
}
