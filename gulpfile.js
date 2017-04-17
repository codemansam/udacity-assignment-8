const 	gulp = require('gulp'),
		imagemin = require('gulp-imagemin'),
		uncss = require('gulp-uncss'),
		cleanCSS = require('gulp-clean-css'),
		concatCss = require('gulp-concat-css');

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
    .pipe(gulp.dest('dist/css/final'));
}); 

gulp.task('default',['images','uncss', 'concatCss' ]);