var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GenreSchema = new Schema(
	{
		Name: {type: String, required: true, minlength:3, maxlength: 100},
	}
);

//Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
	return '/catalog/Genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);