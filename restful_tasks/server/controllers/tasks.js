const Task = require('../models/tasks.js')
const bcrypt = require('bcrypt');

class TaskController {
    all( req,res ){
        Task.find({}, function (err, tasks){
            if (err){
                console.log("We have an error", err)
            }
            else {
                return res.json(tasks)
            }
        })
    }
    getOne(req,res){
        Task.findById(req.params.id, function(err, task){
            if (err){
                console.log("We have an error", err)
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
                console.log("We have an error", err)
                return res.json({message: "Could not find Task: "+req.params.id, error: err})
            }
            else{
                var column = req.params.column
                task[column] = req.params.value
                task.save(function(err){
                    if (err){
                        console.log("We have an error", err)
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
        Task.remove({_id:req.params.id}, function(err){
            if (err){
                console.log("We have an error", err)
                return res.json({message: "Could not remove Task", error: err})
            }
            else{
                return res.json({message: "Task: "+req.params.id+" was removed"})
            }
        })
    }
    create(req,res){
        var task = new Task({title: req.params.title})
        task.save(function(err){
            if (err){
                console.log("We have an error", err)
                return res.json({message: "Could not create Task", error: err})
            }
            else{
                return res.json(task)
            }
        })
    }
}
module.exports = new TaskController()