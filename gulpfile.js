'use strict';

const gulp        = require('gulp');
const babel       = require('gulp-babel');
const sass        = require('gulp-sass');
const through     = require('through2');

// 编译js文件
gulp.task('babel', function(){
  return gulp.src(['./src/**/*.js', './src/**/*.jsx'])
    .pipe(babel())
    .pipe(replace(/\.scss/g, '.css'))
    .pipe(gulp.dest('dist'))
});

// 编译sass
gulp.task('sass', function() {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['babel', 'sass']);

function modifyStreamContent(modify) {
  return through.obj(function(chunk, enc, callback) {
      var content = chunk.contents.toString();
      content = modify(content, chunk.path) || content;
      chunk.contents = new Buffer.from(content);
      this.push(chunk);
      callback();
  })
}

function replace(reg, txt) {
  return modifyStreamContent((content) => {
    content = content.replace(reg, txt);
    return content;
  })
}