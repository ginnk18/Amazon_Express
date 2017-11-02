const kx = require('../db/connection');

const ProductsController = {
	index (req, res, next) {
		kx
			.select()
			.from('products')
			.orderBy('created_at', 'DESC')
			.then(products => {
				res.render('products/index', {products})
			})
			.catch(error => next(error))
	},

	show (req, res, next) {
		const {id} = req.params;

		kx
			.first()
			.from('products')
			.where({id})
			.then(product => res.render('products/show', {product}))
			.catch(error => next(error))
	},

	new (req, res, next) {
		res.render('products/new')
	},

	create (req, res, next) {
		const {title, price, description} = req.body;

		kx
			.insert({title: title, price: price, description: description})
			.into('products')
			.then(() => res.redirect('/products'))
			.catch(error => next(error))
	}
}

module.exports = ProductsController;