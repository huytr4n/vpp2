var app = app || {};

app.product = Backbone.Model.extend({

});

app.productList = Backbone.Collection.extend({
	url: '/api/product',
	model: app.product
});

app.Products = new app.productList();

app.Products.fetch();