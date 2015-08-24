'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var notify = require('gulp-notify') ;
var bower = require('gulp-bower');
var browserSync = require('browser-sync').create();

var config = {
  htmlDir: './',
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
      return 'SASS: ' + error.message;
     }))
    .pipe(concat('application.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('server', ['sass'], function() {

    browserSync.init({
      server: "./"
    });

    // sass
    gulp.watch(config.sassDir + '/**/*.sass', ['sass']);

    // html
    gulp.watch(config.htmlDir + '/index.html').on('change', browserSync.reload);
});

// tasks
gulp.task('default', ['bower', 'sass', 'server']);
