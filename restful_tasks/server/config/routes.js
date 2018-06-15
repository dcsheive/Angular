const tasks = require('../controllers/tasks.js')
const path = require('path')
module.exports = function (app){
    app.get('/tasks',tasks.all)
    app.post('/tasks',tasks.create)
    app.get('/tasks/:id',tasks.getOne)
    app.put('/tasks/:id',tasks.update)
    app.delete('/tasks/:id',tasks.delete)
    
}
