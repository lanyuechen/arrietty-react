'use strict';

const gulp        = require('gulp');
const babel       = require('gulp-babel');
const sass        = require('gulp-sass');
const concat      = require('gulp-concat');
const through     = require('through2');

// 编译js文件
gulp.task('babel', function(){
  return gulp.src(['./src/**/*.js', './src/**/*.jsx'])
    .pipe(babel())
    .pipe(rename())
    .pipe(gulp.dest('dist'))
});

// 合并样式文件
gulp.task('concat', ['sass'], function() {
  return gulp.src(['./dist/index.css'])
  .pipe(concat("index.css"))
  .pipe(gulp.dest('dist'));
});

// 构建css
gulp.task('build-css', ['sass'], function() {
  return gulp.src(['./dist/index.css'])
    .pipe(concat("dh-charts.min.css"))
    .pipe(gulp.dest('lib'));
});

// 编译sass
gulp.task('sass', function() {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['babel', 'sass', 'concat']);

function modifyStreamContent(modify) {
  return through.obj(function(file, endcoding, callback) {
      if(file.isNull()) {
          this.push(file)
          return callback()
      }
      if(file.isStream()) {
          log("streaming not supported", "error")
          return callback()
      }
      var content = file.contents.toString()
      content = modify(content, file.path) || content
      file.contents = new Buffer.from(content)
      this.push(file)
      callback()
  })
}

function rename() {
  return modifyStreamContent((content, filePath) => {
    content = content.replace(/\.scss/g, ".css");
    return content
  })
}