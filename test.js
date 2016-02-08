'use strict';

var assert = require('assert'),
	gulpSuccss = require('./index.js');

it('Succss should start', function (cb) {
	var stream = gulpSuccss({
		baseUrl: 'http://www.smile.fr'
	});

	stream.on('data', function (file) {
		console.log("file:", file.contents.toString());
	});

	stream.on('end', cb);

	stream.end();
});
