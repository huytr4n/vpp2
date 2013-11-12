/**
 * product model
 */
function myModel (mongoose, app) {

	// create product schema
	var Schema = mongoose.Schema;
	var productSchema = new Schema ({
		name : String,
		price : String,
		status : Boolean,
		quantity : Number,
		code : { type : String, index : { unique: true } }
	});

	// create product model
	var Product = mongoose.model('Product', productSchema, 'product');

	/**
	 * GET all products
	 */
	app.get('/api/product', function (req, res) {
		return Product.find(function (err, products) {
			res.send(products);
		});
	});

	/**
	 * POST a product
	 */
	app.post('/api/product', function (req, res) {
		
		// get product info
		var reqBody = req.body; 

		// create new Product
		var product = new Product(reqBody);

		// save product to database
		product.save(function (err) {
			if (!err) {
				console.log('Product is created!');
			}
		});

		res.send(product);
	});
	/**
	 * PUT update a product
	 */
	app.put('/api/product', function (req, res) {

		var reqBody = req.body,
			id = reqBody._id;

		delete reqBody._id;

		return Product.findByIdAndUpdate(id, reqBody, function (err, product) {
			res.send(product);
		});
	});

	/**
	 * GET product by id
	 */
	app.get('/api/product/:id', function (req, res) {
		return Product.findById(req.params.id, function (err, product) {
			res.send(product);
		});
	});

	/**
	 * GET delete product
	 */
	app.get('/api/product/:id/remove', function (req, res) {
		return Product.findByIdAndRemove(req.params.id, function (err) {
			res.send(err);
		});
	});
}

module.exports = myModel;