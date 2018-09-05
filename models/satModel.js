'user strict';

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var MemberSchema = new Schema({
    nama:{
        type: String,
        required: 'Nama perlu ditambahkan'
    },
    status:{
        type: [{
            type: String,
            enum: ['mahasiswa', 'siswa', 'bekerja', 'lain']
        }],
        default:['lain']
    },
    kota:{
        type: [{
            type: String,
            enum: ['sumbawa', 'luar sumbawa']
        }],
        default:['sumbawa']
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
    exp:{
        type: Number,
        default:0
    },
    created: { 
        type: Date,
        default: Date.now
    }

})

var BelajarSchema = new Schema({
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
    kategori: {
        type:[{
            type: String,
            enum: ['a', 'b', 'c', 'd']
        }],
        default:['a']
    },
    nomor: Number,
    judul: String,
    gambar: Buffer,
    pertanyaan: String,
    jwA: String,
    jwB: String,
    jwC: String,
    jwD: String,
    kunci: String,
    level:{
        type:[{
            type: Number,
            enum: [1,2,3]
        }],
        default: [1]
    }
})

module.exports = mongoose.model('Mems', MemberSchema)
module.exports = mongoose.model('Bels', BelajarSchema)
module.exports = mongoose.model('Kons', KonversiSchema)
module.exports = mongoose.model('Tests', TestSchema)