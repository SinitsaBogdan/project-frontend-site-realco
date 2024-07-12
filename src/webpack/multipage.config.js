const path = require('path');

result = {};

result.entry = {
	home: {
		import: path.join(__dirname, '../../src/components/pages/home/HomePage.js'),
		filename: 'js/HomePage.js',
	},
	about: {
		import: path.join(__dirname, '../../src/components/pages/about/AboutPage.js'),
		filename: 'js/AboutPage.js',
	},
	contact: {
		import: path.join(__dirname, '../../src/components/pages/contact/ContactPage.js'),
		filename: 'js/ContactPage.js',
	},
	cart: {
		import: path.join(__dirname, '../../src/components/pages/cart/CartPage.js'),
		filename: 'js/CartPage.js',
	},
	compilations: {
		import: path.join(__dirname, '../../src/components/pages/compilations/CompilationsPage.js'),
		filename: 'js/CompilationsPage.js',
	},
	house: {
		import: path.join(__dirname, '../../src/components/pages/house/HousePage.js'),
		filename: 'js/HousePage.js',
	},
	locations: {
		import: path.join(__dirname, '../../src/components/pages/locations/LocationsPage.js'),
		filename: 'js/LocationsPage.js',
	},
	houses: {
		import: path.join(__dirname, '../../src/components/pages/houses/HousesPage.js'),
		filename: 'js/HousesPage.js',
	},
	promo: {
		import: path.join(__dirname, '../../src/components/pages/promo/PromoPage.js'),
		filename: 'js/PromoPage.js',
	},
	reviews: {
		import: path.join(__dirname, '../../src/components/pages/reviews/ReviewsPage.js'),
		filename: 'js/ReviewsPage.js',
	},
	post: {
		import: path.join(__dirname, '../../src/components/pages/post/PostPage.js'),
		filename: 'js/PostPage.js',
	},
	blog: {
		import: path.join(__dirname, '../../src/components/pages/blog/BlogPage.js'),
		filename: 'js/BlogPage.js',
	},
	faqs: {
		import: path.join(__dirname, '../../src/components/pages/faqs/FAQsPage.js'),
		filename: 'js/FAQsPage.js',
	},
	property: {
		import: path.join(__dirname, '../../src/components/pages/property/PropertyPage.js'),
		filename: 'js/PropertyPage.js',
	},
};

result.pages = [
	{
		chunks: ['home'],
		page: 'pages/HomePage.html',
		template: path.join(__dirname, '../../src/components/pages/home/HomePage.pug'),
	},
	{
		chunks: ['about'],
		page: 'pages/AboutPage.html',
		template: path.join(__dirname, '../../src/components/pages/about/AboutPage.pug'),
	},
	{
		chunks: ['contact'],
		page: 'pages/ContactPage.html',
		template: path.join(__dirname, '../../src/components/pages/contact/ContactPage.pug'),
	},
	{
		chunks: ['cart'],
		page: 'pages/CartPage.html',
		template: path.join(__dirname, '../../src/components/pages/cart/CartPage.pug'),
	},
	{
		chunks: ['compilations'],
		page: 'pages/CompilationsPage.html',
		template: path.join(__dirname, '../../src/components/pages/compilations/CompilationsPage.pug'),
	},
	{
		chunks: ['house'],
		page: 'pages/HousePage.html',
		template: path.join(__dirname, '../../src/components/pages/house/HousePage.pug'),
	},
	{
		chunks: ['locations'],
		page: 'pages/LocationsPage.html',
		template: path.join(__dirname, '../../src/components/pages/locations/LocationsPage.pug'),
	},
	{
		chunks: ['houses'],
		page: 'pages/HousesPage.html',
		template: path.join(__dirname, '../../src/components/pages/houses/HousesPage.pug'),
	},
	{
		chunks: ['promo'],
		page: 'pages/PromoPage.html',
		template: path.join(__dirname, '../../src/components/pages/promo/PromoPage.pug'),
	},
	{
		chunks: ['reviews'],
		page: 'pages/ReviewsPage.html',
		template: path.join(__dirname, '../../src/components/pages/reviews/ReviewsPage.pug'),
	},
	{
		chunks: ['post'],
		page: 'pages/PostPage.html',
		template: path.join(__dirname, '../../src/components/pages/post/PostPage.pug'),
	},
	{
		chunks: ['blog'],
		page: 'pages/BlogPage.html',
		template: path.join(__dirname, '../../src/components/pages/blog/BlogPage.pug'),
	},
	{
		chunks: ['faqs'],
		page: 'pages/FAQsPage.html',
		template: path.join(__dirname, '../../src/components/pages/faqs/FAQsPage.pug'),
	},
	{
		chunks: ['property'],
		page: 'pages/PropertyPage.html',
		template: path.join(__dirname, '../../src/components/pages/property/PropertyPage.pug'),
	},
];

module.exports = result;
