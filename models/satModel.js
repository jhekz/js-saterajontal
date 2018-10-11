'user strict';

var mongoose = require('mongoose')
var Schema = mongoose.Schema
// const bcrypt = require('bcrypt');
var MemberSchema = new Schema({
    nama:{
        type: String,
        required: 'Nama perlu ditambahkan'
    },
    status:{
        type: String,
        default: 'Belum ditambahkan'
    },
    kota:{
        type: String,
        default: 'Belum ditambahkan'
    },
    username:{
        type: String,
        required:'Username perlu ditambahkan'
    },
    password:{
        type:String,
        required: 'Password perlu ditambahkan'
    },
    email:{
        type: String,
        required: 'Email perlu ditambahkan'
    },
    gambar:{
        type: Buffer,
    },
    level:{
        type:Number,
        default:1
    },
    expr:{
        type: Number,
        default:0
    },
    created: { 
        type: Date,
        default: Date.now
    }

})

var BelajarSchema = new Schema({
    _id: {
        type: Number,
        sequence_value:0
    },
    nomor: Number,
    judul: String,
    isi: String,
    gambar: Buffer,
    pertanyaan: String,
    jwA: String,
    jwB: String,
    jwC: String,
    jwD: String,
    kunci: String,
})

var KonversiSchema =  new Schema({
    _id: {
        type: Number,
        sequence_value:0
    },
    latin: String,
    jontal: String,
    kategori:{
        type:[{
            type: String,
            enum:['huruf', 'kata', 'kalimat','paragraf']
        }],
        default:['kata']
    },
    nomor: Number
})

var TestSchema = new Schema({
    _id: {
        type: Number,
        sequence_value:0
    },
    kategori: Number,
    nomor: Number,
    judul: String,
    gambar: Buffer,
    pertanyaan: String,
    jwA: String,
    jwB: String,
    jwC: String,
    jwD: String,
    kunci: String,
    level: Number
})

module.exports = mongoose.model('Mems', MemberSchema)
module.exports = mongoose.model('Bels', BelajarSchema)
module.exports = mongoose.model('Kons', KonversiSchema)
module.exports = mongoose.model('Tests', TestSchema)