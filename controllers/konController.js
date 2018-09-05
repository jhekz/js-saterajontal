'use strict';

var mongoose = require('mongoose'),
Kon = mongoose.model('Kons')

exports.list_all_kon = function(req, res){
    Kon.find({}, function(err, kon){
        if (err)
        res.send(err)
        res.json(kon)
    })
}

exports.create_a_kon = function(req, res){
    var new_kon = new Kon(req.body)
    new_kon.save(function(err, kon){
        if (err)
        res.send(err)
        res.json(kon)
    })
}

exports.read_a_kon = function(req, res){
    Kon.findById(req.params.konId, function(err, kon){
        if (err)
        res.send(err)
        res.json(kon)
    })
}

exports.update_a_kon = function(req, res){
    Kon.findByIdAndUpdate({_id: req.params.konId}, req.body, {new: true}, function(err, kon){
        if (err)
        res.send(err)
        res.json(kon)
    })
}

exports.delete_a_kon = function(req, res){
    Kon.remove({
        _id: req.params.konId
    }, function(err, kon){
        if (err)
        res.send(err)
        res.json({messege: 'Data telah terhapus'})
    }
)
}