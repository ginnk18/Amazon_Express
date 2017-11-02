const path = require('path');
const {Router} = require('express');
const ProductsController = require('./controllers/products');
const multer = require('multer');
const upload = multer({dest: path.join(__dirname, 'public', 'uploads')})

//Define Router Instances 
const root = Router()
const products = Router()

//Root Routes
root.get('/', ProductsController.index)




//Products Routes:
root.use('/products', products)
//make all products routes begin with '/products'

// index action
products.get('/', ProductsController.index)

//new action
products.get('/new', ProductsController.new)

//create action 
products.post('/', ProductsController.create)
// add 'upload.single('photo')' between '/' and ProductsController if
//I want to upload photos with products later

//show action
products.get('/:id', ProductsController.show)

module.exports = root;