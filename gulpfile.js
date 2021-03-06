// Variáveis:
var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

// Variáveis Diretórios :
var SRCcss = './source/scss/style.scss';
var SRChtml = './source/index.html';

// Compilar e Minificar SCSS
gulp.task('sass', function () {
 return gulp.src(SRCcss)
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./dist/css'));
 });

// Minify Html:
gulp.task('minify-html', function() {
  return gulp.src(SRChtml)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

// Watch
gulp.task('default',function(){
	 gulp.watch(SRCcss, ['sass'])
	 gulp.watch(SRChtml, ['minify-html'])
});
