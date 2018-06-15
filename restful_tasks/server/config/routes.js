const tasks = require('../controllers/tasks.js')
module.exports = function (app){
    app.get('/tasks',tasks.all)
    app.post('/tasks',tasks.create)
    app.get('/tasks/:id',tasks.getOne)
    app.update('/tasks/:id',tasks.update)
    app.delete('/tasks/:id',tasks.delete)
}
