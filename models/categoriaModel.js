//categoriaModel.js
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let modelSchema = new Schema({
	nombre : { type: String , required: true }
});
let model = mongoose.model('categoria',modelSchema,'categoria');
module.exports = model;