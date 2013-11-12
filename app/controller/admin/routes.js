/**
 * Admin Routing
 */
function routes (app) {
	/**
	 * Manage Page
	 */
	app.get('/admin', function (req, res) {
		res.render('./admin/manage');
	});

	/**
	 * Product Page
	 */
	app.get('/admin/product', function (req, res) {
		res.render('./admin/product');
	});
}

module.exports = routes;