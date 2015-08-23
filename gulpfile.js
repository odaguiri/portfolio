'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

// sass
gulp.task('sass', function(){
  gulp
    .src('./assets/sass/application.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('application.css'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./assets/sass/**/*.sass', ['sass']);
});

// tasks
gulp.task('default', ['sass', 'sass:watch']);