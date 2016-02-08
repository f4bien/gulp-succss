# gulp-succss 

[![Build Status](https://travis-ci.org/f4bien/gulp-succss.svg?branch=master)](https://travis-ci.org/f4bien/gulp-succss)
[![Dependency Status](https://david-dm.org/f4bien/gulp-succss.svg)](https://david-dm.org/f4bien/gulp-succss)
[![devDependency Status](https://david-dm.org/f4bien/gulp-succss/dev-status.svg)](https://david-dm.org/f4bien/gulp-succss#info=devDependencies)
[![peerDependency Status](https://david-dm.org/f4bien/gulp-succss/peer-status.svg)](https://david-dm.org/f4bien/gulp-succss#info=peerDependencies)

> Gulp plugin for [Succss](https://github.com/B2F/Succss)


## Install

```
$ npm install --save-dev gulp-succss
```


## Usage

```js
var gulp = require('gulp'),
    succss = require('gulp-succss');

gulp.task('styles', function () {
	return gulp.src('src/file.ext')
		.pipe(succss({
			baseUrl: 'http://www.example.com'
		}))
		.pipe(gulp.dest('dist'));
});
```


## API

### Succss(options)

#### options

##### baseUrl

Type: `string`  
Default: `false`  
Required: `true`

Define a base URL in order to run tests.


## License

MIT
