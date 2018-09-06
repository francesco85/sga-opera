var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');
    

gulp.task('styles', function() {
    return gulp.src("./app/assets/styles/scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer]))
        .on('error',function(err){
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest("./app/temp/styles"));
});