const products = require('../controllers/products.js')
const users = require('../controllers/users.js')
const path = require('path')
module.exports = function (app){
    app.get('/api/products',products.all)
    app.post('/api/products',products.create)
    app.get('/api/products/:id',products.getOne)
    app.put('/api/products/:id',products.update)
    app.delete('/api/products/:id',products.delete)

    app.get('/api/users/', users.getAll)
    app.get('/api/users/:id', users.getOne)
    app.post('/api/users/register',users.register)
    app.post('/api/users/login', users.login)
    app.get('/api/logout', users.logout)
    app.get('/api/user', users.currentUser)

    app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./public/dist/public/index.html"))
	});
}
