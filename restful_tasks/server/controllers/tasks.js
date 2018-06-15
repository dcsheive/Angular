const Task = require('../models/tasks.js')
const bcrypt = require('bcrypt');

class TaskController {
    all( req,res ){
        Task.find({}, function (err, tasks){
            if (err){
                return res.json({message: "Could not find Tasks", error: err})
            }
            else {
                return res.json(tasks)
            }
        })
    }
    getOne(req,res){
        Task.findById(req.params.id, function(err, task){
            if (err){
                return res.json({message: "Could not find Task: "+req.params.id, error: err})
            }
            else{
                return res.json(task)
            }
        })
    }
    update(req,res){
        Task.findById(req.params.id, function(err, task){
            if (err){
                return res.json({message: "Could not find Task: "+req.params.id, error: err})
            }
            else{
                task.title = req.body.title || task.title;
                task.description = req.body.description || task.description;
                task.completed = req.body.completed || task.completed;
                task.save(function(err){
                    if (err){
                        return res.json({message: "Could not update Task: "+req.params.id, error: err})
                    }
                    else{
                        return res.json(task)
                    }
                })
            }
        })
    }
    delete(req,res){
        Task.findById(req.params.id, function (err,task){
            if (err){
                return res.json({message: "Could not find Task: "+req.params.id, error: err})
            }
            else {
                Task.remove({_id:req.params.id}, function(err){
                    if (err){
                        return res.json({message: "Could not remove Task"+req.params.id, error: err})
                    }
                    else{
                        return res.json(task)
                    }
                })
            }
        })
    }
    create(req,res){
        var task = new Task(req.body)
        task.save(function(err){
            if (err){
                return res.json({message: "Could not create Task", error: err})
            }
            else{
                return res.json(task)
            }
        })
    }
}
module.exports = new TaskController()