# gulp-succss [![Build Status](https://travis-ci.org/f4bien/gulp-succss.svg?branch=master)](https://travis-ci.org/f4bien/gulp-succss)

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
		  baseUrl: 'http://www.smile.fr'
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
