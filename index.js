'use strict';

var gutil = require('gulp-util'),
	through = require('through2'),
	PythonShell = require('python-shell');

module.exports = function (options) {
	if (!options.baseUrl) {
		throw new gutil.PluginError('gulp-succss', '`baseUrl` required');
	}

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-succss', 'Streaming not supported'));
			return;
		}

		try {
			var succss = new PythonShell('./node_modules/succss/bin/succss.py', {
				mode: 'text'
			});
			if (!succss) {
				throw new gutil.PluginError('gulp-succss', 'Script not found');
			}
			succss
				.send({command: 'check', args: [
					// TODO
				]})
				.on('message', function (message) {
					console.log(message);
					cb();
				});
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-succss', err));
		}
	});
};
