'use strict';

var mongoose = require('mongoose'),
Mem = mongoose.model('Mems')
const jwt = require('jsonwebtoken')


exports.list_all_mem = function (req, res) {
    Mem.find({}, function (err, mem) {
        if (err)
            res.send(err)
        res.json(mem)
    })
}

exports.create_a_mem = function (req, res) {
    var new_mem = new Mem(req.body)
    new_mem.save().then(result => {
        res.status(200).json(result)
    }).catch(err => {
        res.status(404).json(err)
    })
    // new_mem.save().then(result => {
        // console.log(result);
        // res.status(200).json(result)
    // .catch(console.log(err));
    // });
    // new_mem.save(function (err, mem) {
        // if (err)
            // res.send(err)
            // res.status(404)
        // res.json(mem)
        // if(res.json(mem[0].driver))
    // })
}

exports.read_a_mem = function (req, res) {
    Mem.findById(req.params.memId, function (err, mem) {
        if (err)
            res.send(err)
        res.json(mem)
    })
}

exports.login_mem = function (req, res) {
    Mem.find({ email: req.body.email }, function (err, mem) {
        if (mem < 1) {
            res.status(404).json({
                message: 'User tidak ditemukan'
            })
        } else {
            if (req.body.password === null) {
                res.status(404).json({
                    message: 'password tidak terinput'
                })
            } else if (req.body.password === mem[0].password) {
                // const token = jwt.sign({
                //     email: mem[0].email,
                //     password: mem[0].password,
                //     username: mem[0].username,
                //     _id: mem[0]._id,
                //     level: mem[0].level,
                //     expr: mem[0].exp,
                //     status: mem[0].status,
                //     kota: mem[0].kota
                // }, 'secret', {
                //     expiresIn: "1h"
                // }
                // )
                const token = {
                    email: mem[0].email,
                    nama: mem[0].nama,
                    password: mem[0].password,
                    username: mem[0].username,
                    _id: mem[0]._id,
                    level: mem[0].level,
                    expr: mem[0].expr,
                    status: mem[0].status,
                    kota: mem[0].kota
                }
                return res.status(200).json(token)
            } else {
                return res.status(401).json({
                    message: 'Auth Gagal'
                })
            }
        }
    })

}

exports.update_a_mem = function (req, res) {
    Mem.findByIdAndUpdate({ _id: req.params.memId }, req.body, { new: true }, function (err, mem) {
        if (err)
            res.send(err)
        res.json(mem)
    })
}

exports.delete_a_mem = function (req, res) {
    Mem.remove({
        _id: req.params.memId
    }, function (err, mem) {
        if (err)
            res.send(err)
        res.json({ messege: 'Member telah terhapus' })
    }
    )
}