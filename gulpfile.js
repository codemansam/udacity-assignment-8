const 	gulp = require('gulp'),
		imagemin = require('gulp-imagemin');

gulp.task('images', () =>
    gulp.src('app/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
gulp.task('default',['images',]);