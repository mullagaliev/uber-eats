var gulp         = require('gulp');
var config       = require('../config');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var autoprefixer = require('autoprefixer');
var csso = require('postcss-csso');

gulp.task('css', function () {
    var plugins = [
        cssnext(),
        autoprefixer(),
        // csso()
    ];
    return gulp.src(config.src.css + '/*.css')
        .pipe(postcss(plugins))
        .on('error', config.errorHandler)
        .pipe(gulp.dest(config.dest.css));
});

gulp.task('css:watch', function() {
    gulp.watch(config.src.css + '/**/*.{.css}', ['css']);
});
