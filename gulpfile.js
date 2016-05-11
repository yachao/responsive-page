var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var htmlmin = require('gulp-htmlmin');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

var reload = browserSync.reload;
var paths = {
	html: ['*.html'],
	css: ['./css/*.css']
};

//minify and concat css
gulp.task('css', function(){
	var date = new Date().getTime();
	gulp.src(paths.css)
		.pipe(autoprefixer())
		.pipe(concat('app.css'))
		.pipe(replace(/_VERSION_/gi, date))
		.pipe(minifyCss())
		.pipe(rename({extname: '.min.css'}))
		.pipe(gulp.dest('./dist/css'));
});

// use default task to launch Browsersync and watch static files
gulp.task('serve', ['css'], function(){
	// Serve files from the root of this project
	browserSync({
		notify: false,
		server: {
				baseDir: './'
			},
		host: '10.1.180.24',
		port: 8008,
		open: 'external',
		browser: 'chrome'
	});

	// all browsers reload after tasks are complete.
	gulp.watch(paths.css, ['css', reload]);
	//gulp.watch(paths.js, reload);
	gulp.watch(paths.html, reload);
});

gulp.task('default', ['serve']);