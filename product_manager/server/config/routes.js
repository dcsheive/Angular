const products = require('../controllers/products.js')
const path = require('path')
module.exports = function (app){
    app.get('/api/products',products.all)
    app.post('/api/products',products.create)
    app.get('/api/products/:id',products.getOne)
    app.put('/api/products/:id',products.update)
    app.delete('/api/products/:id',products.delete)
    app.all("*", (req,res,next) => {
		    res.sendFile(path.resolve("./public/dist/public/index.html"))
	  });
}
