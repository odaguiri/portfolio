'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var notify = require('gulp-notify');
var bower = require('gulp-bower');
var browserSync = require('browser-sync').create();
var rsync  = require('gulp-rsync');

var config = {
  htmlDir: './',
  bowerDir: './assets/vendors',
  sassDir: './assets/stylesheets',
  jsDir: './assets/javascripts',
  hostname: '162.243.113.49'
};

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

// js
gulp.task('js', function() {
  return gulp
    .src(config.jsDir + '/*.js')
    .pipe(minify({
      src: '-debug.js',
      ext: '.js'
    }))
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('server', ['sass', 'js'], function() {

    browserSync.init({
      server: "./"
    });

    // sass
    gulp.watch(config.sassDir + '/**/*.sass', ['sass']);

    // js
    gulp.watch(config.jsDir + '/**/*.js', ['js']);

    // html
    gulp.watch(config.htmlDir + '/index.html').on('change', browserSync.reload);
});

// deploy
gulp.task('deploy', function() {
  gulp.src(['./*.html', './public', './robots.txt'])
    .pipe(rsync({
      hostname: config.hostname,
      destination: '/var/www/html',
      archive: true,
      silent: false,
      compress: true,
      progress: true,
      incremental: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['./*.keep'],
    }));
});

// tasks
gulp.task('default', ['bower', 'sass', 'server']);
