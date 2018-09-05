'use strict';

var mongoose = require('mongoose'),
Mem = mongoose.model('Mems')

exports.list_all_mem = function(req, res){
    Mem.find({}, function(err, mem){
        if (err)
        res.send(err)
        res.json(mem)
    })
}

exports.create_a_mem = function(req, res){
    var new_mem = new Mem(req.body)
    new_mem.save(function(err, mem){
        if (err)
        res.send(err)
        res.json(mem)
    })
}

exports.read_a_mem = function(req, res){
    Mem.findById(req.params.memId, function(err, mem){
        if (err)
        res.send(err)
        res.json(mem)
    })
}

exports.update_a_mem = function(req, res){
    Mem.findByIdAndUpdate({_id: req.params.memId}, req.body, {new: true}, function(err, mem){
        if (err)
        res.send(err)
        res.json(mem)
    })
}

exports.delete_a_mem = function(req, res){
    Mem.remove({
        _id: req.params.memId
    }, function(err, mem){
        if (err)
        res.send(err)
        res.json({messege: 'Member telah terhapus'})
    }
)
}