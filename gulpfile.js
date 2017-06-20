var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');

gulp.task('sass', function() {
    return sass('style/sass/**/*.sass').pipe(gulp.dest('style/css'));
})

gulp.task('watch', function() {
    gulp.watch('style/sass/**/*.sass', ['sass']);
})

gulp.task('default', ['sass', 'watch']);