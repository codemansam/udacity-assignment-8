    var	gulp = require('gulp');
	var	concatCss = require('gulp-concat-css');
	var	minify = require('gulp-minify');
    var concat = require('gulp-concat');
    var imagemin = require('gulp-imagemin');
    var htmlmin = require('gulp-htmlmin');
    var ngrok = require('ngrok');
    var cleanCSS = require('gulp-clean-css');
 

gulp.task('concatCss', function () {
  return gulp.src('app/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('app/css'));
});
 
//gulp.task('minify-css', function() {
//  return gulp.src('app/css/bundle.css')
//    .pipe(cleanCSS())
//    .pipe(gulp.dest('dist/css/'));
//});

gulp.task('minify-css', function() {
  return gulp.src('css/style.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'));
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


gulp.task('minifyHTML', function() {
  return gulp.src('view/app/pizza.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('view/dist'));
});
//gulp.task('default',['uncss', 'concatCss', 'minify-css' ]);