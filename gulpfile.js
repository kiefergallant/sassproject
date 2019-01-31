/* 0) cd <project dir>   */
/* 1) npm install        */
/* 2) npm run sass       */
/* 3) npm run watch      */
/* 4) Modify SCSS         */
/* 5) Turn off watch     */
/* ?) ????????           */
/* 6) Profit             */

'use strict';

const gulp = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const flog = require('fancy-log')

gulp.task('sass', function() {
  flog('Compiling SASS w/ Gulp!')
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(csso())
    .pipe(gulp.dest('./css'))
})

gulp.task('watch', function() {
  flog('Enabling SASS watch...')
  gulp.watch('./scss/**/*.scss', gulp.series('sass'))
})