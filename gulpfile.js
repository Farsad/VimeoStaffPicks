var gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const less = require('gulp-less');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('babelfy', function () {

  return browserify({
      extensions: ['.js', '.jsx'],
      entries: './js/index.js',
      debug: true
    }
  )
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

/**
 * Simple task compile .less files
 * Concatinate all styles into style.css
 * Save style.css into dist folder
 **/
gulp.task('css', function () {
  return gulp.src('less/**/*.*')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});


/**
 * Watch all the changes in css and js folder
 * Reload browser when code changed
 **/
gulp.task('watch', function () {
  gulp.watch('less/**/*.*', ['css', browserSync.reload]);
  gulp.watch('js/**/*.*', ['babelfy', browserSync.reload]);
});


/**
 * BrowserSync setup to reloads app page
 * each time browserSync.reload called in watch
 * NOT IN USE
 * if you want to use please run 'browserSync' before watch
 * i.e. gulp.task('watch', ['browserSync'], function() {
* and browserSync.reload after css and babelfy
* i.e gulp.watch('less/*.*', ['css', browserSync.reload]);
**/
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      proxy: "localhost:9400"
    }
  });
});


gulp.task('apply-prod-environment', function() {
  process.env.NODE_ENV = 'production';
});

gulp.task('build', ['apply-prod-environment', 'babelfy', 'css', 'watch']);
gulp.task('default', ['build', 'browserSync']);
