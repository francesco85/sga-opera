var gulp = require('gulp');
const    webpack = require('webpack');
const config = require('../../webpack.config.js');
gulp.task('scripts',function(callback){
    webpack(config,function(err,stats){
        if (err) {
            
            console.error(err.stack || err);
            if (err.details) {
                console.error(err.details);
            }
            return;
        }
         const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
        
    });
    callback();
});