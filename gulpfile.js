'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('styles/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/styles'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('styles/sass/**/*.scss', ['sass']);
});