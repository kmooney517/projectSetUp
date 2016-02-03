var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var server     = require('gulp-server-livereload');
var gutil      = require('gulp-util');
var sass       = require('gulp-sass');


// Babel - converts ES6 code to ES5 - however it doesn't handle imports.
// Browserify - crawls your code for dependencies and packages them up 
// into one file. can have plugins.
// Babelify - a babel plugin for browserify, to make browserify 
// handle es6 including imports. 


// runs the conversion from es6 to es5 and compiles all 
// files into one js file for browser
gulp.task('es6', function() {
  browserify({
    entries: 'js/main.js',
    debug: true
  })
  .transform('babelify', {
    presets: ['es2015']
  })
  .on('error', gutil.log)
  .bundle()
  .on('error', gutil.log)
  .pipe(source('app/bundle.js'))
  .pipe(gulp.dest(''));
});



// converts sass file into css file
gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass({
      includePaths: ['./node_modules/bootstrap-sass/assets/stylesheets']
    }).on('error', sass.logError))
    .pipe(gulp.dest('app/css/'));
});


// runs the live reload and sets localhost:8000 as server
gulp.task('server', function () {
  return gulp.src('app')
    .pipe(server({
      livereload: true
    }));
});

// watches for changes to js files
gulp.task('watch', function() {
  gulp.watch('./js/**/*.js', ['es6']);
  gulp.watch('./sass/**/*.scss', ['sass']);
});


// cmd: gulp start will run the watch and the server tasks
gulp.task('start', ['es6', 'sass', 'server', 'watch']);  








