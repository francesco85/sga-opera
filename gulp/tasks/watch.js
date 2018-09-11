var gulp = require('gulp'),
    watch = require('gulp-watch'),
browSync = require('browser-sync').create();

gulp.task('watch',function(){
    browSync.init({
        server:{
            baseDir:'./app'
        }
    });
    watch('./scss/**/*.scss',function(){
        gulp.start('cssInject');
    });
    watch('./app/*.html', function(){
        browSync.reload();
    });
    watch('./app/assets/scripts/**/*.js',function(){
        gulp.start('scriptRefresh');
    });
});

gulp.task('cssInject',['styles'],function(){
    return gulp.src('./app/temp/styles/app.css')
        .pipe(browSync.stream()); 
});

gulp.task('scriptRefresh',['scripts'],function(){
    browSync.reload();
});

gulp.task('default',function(){
    gulp.start('watch');
});