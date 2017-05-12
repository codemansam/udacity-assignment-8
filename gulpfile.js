    var	gulp = require('gulp');
	var	uncss = require('gulp-uncss');
	var	cleanCSS = require('gulp-clean-css');
	var	concatCss = require('gulp-concat-css');
	var	minify = require('gulp-minify');
    var throttle = require('lodash.throttle');
    var concat = require('gulp-concat');
 
gulp.task('uncss', function () {
    return gulp.src('app/css/*')
        .pipe(uncss({
            html: ['app/pizza.html']
        }))
        .pipe(gulp.dest('dist/css'));sudpo 
});

gulp.task('concatCss', function () {
  return gulp.src('dist/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('dist/css'));
});
 
gulp.task('minify-css', function() {
  return gulp.src('dist/css/bundle.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));
});
 
gulp.task('minify-js', function() {
  gulp.src('app/js/main.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js']
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('concatJS', function() {
  return gulp.src('app/js/*debug.js')
    .pipe(concat('final.js'))
    .pipe(gulp.dest('app/js'));
}); 

gulp.task('default',['uncss', 'concatCss', 'minify-css' ]);