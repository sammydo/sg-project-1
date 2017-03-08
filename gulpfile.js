var gulp = require('gulp');


// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  })
});

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.sass') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('./sass/**/*.sass', ['sass']);
  // Other watchers
});
