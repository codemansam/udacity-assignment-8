const 	gulp = require('gulp'),
		imagemin = require('gulp-imagemin'),
		uncss = require('gulp-uncss'),
		cleanCSS = require('gulp-clean-css'),
		concatCss = require('gulp-concat-css'),
		minify = require('gulp-minify');
    var throttle = require('lodash.throttle');

gulp.task('images', () =>
    gulp.src('app/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
 
gulp.task('uncss', function () {
    return gulp.src('app/css/*')
        .pipe(uncss({
            html: ['app/pizza.html']
        }))
        .pipe(gulp.dest('dist/css'));
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
  gulp.src('app/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist/js'))
}); 

gulp.task('default',['uncss', 'concatCss', 'minify-css' ]);