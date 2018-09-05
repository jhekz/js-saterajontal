'use strict';

var mongoose = require('mongoose'),
Bel = mongoose.model('Bels')

exports.list_all_bel = function(req, res){
    Bel.find({}, function(err, bel){
        if (err)
        res.send(err)
        res.json(bel)
    })
}

exports.create_a_bel = function(req, res){
    var new_bel = new Bel(req.body)
    new_bel.save(function(err, bel){
        if (err)
        res.send(err)
        res.json(bel)
    })
}

exports.read_a_bel = function(req, res){
    Bel.findById(req.params.belId, function(err, bel){
        if (err)
        res.send(err)
        res.json(bel)
    })
}

exports.update_a_bel = function(req, res){
    Bel.findByIdAndUpdate({_id: req.params.belId}, req.body, {new: true}, function(err, bel){
        if (err)
        res.send(err)
        res.json(bel)
    })
}

exports.delete_a_bel = function(req, res){
    Bel.remove({
        _id: req.params.belId
    }, function(err, bel){
        if (err)
        res.send(err)
        res.json({messege: 'Materi telah terhapus'})
    }
)
}