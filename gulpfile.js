'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var notify = require('gulp-notify') ;
var bower = require('gulp-bower');

var config = {
  bowerDir: './assets/vendor',
  sassDir: './assets/sass'
}

// bower
gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(config.bowerDir));
});

// sass
gulp.task('sass', function() {
  return gulp
    .src(config.sassDir + '/application.sass')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        config.sassDir,
        config.bowerDir + '/**'
      ]
    })).on('error', notify.onError(function (error) {
      return 'Error: ' + error.message;
     }))
    .pipe(concat('application.css'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch(config.sassDir + '/**/*.sass', ['sass']);
});

// tasks
gulp.task('default', ['bower', 'sass', 'sass:watch']);