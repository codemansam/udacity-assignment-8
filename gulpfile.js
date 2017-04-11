const 	gulp = require('gulp'),
		imagemin = require('gulp-imagemin'),
		uncss = require('gulp-uncss');

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

gulp.task('default',['images','uncss']);