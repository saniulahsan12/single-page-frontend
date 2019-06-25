var gulp = require("gulp");
var minifyHtml = require("gulp-minify-html");
var cleanCSS = require('gulp-clean-css');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var sass = require('gulp-sass');

var paths = {
    scripts: "src/js/*.js",
    html: "src/html/*.html",
    assets: "src/assets/",
    scss: "src/assets/scss/style.scss",
}

// sass compiler for  gulp
gulp.task('sass', function () {
    gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/css'));
});

gulp.task("minify-html", function(){
     gulp.src(paths.html)
    .pipe(minifyHtml())
    .pipe(gulp.dest('build'));
});

gulp.task('minify-js', function () {
      gulp.src([
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/bootstrap/dist/js/bootstrap.min.js',
          'src/js/script.js',
      ])
          .pipe(uglify().on('error', function(e){
              console.log(e);
           }))
          .pipe(concat("custom.min.js"))
          .pipe(gulp.dest('build/assets/js'));
});

gulp.task('minify-css', function () {
    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/animate.css/animate.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'src/assets/css/style.css',
    ])
      .pipe(cleanCSS())
      .pipe(concat("custom.min.css"))
      .pipe(gulp.dest('build/assets/css'));
});

gulp.task('copy-assets', function() {

      gulp.src('src/assets/images/**/*')
        .pipe(gulp.dest('build/assets/images'));

      gulp.src('src/assets/fonts/**/*')
        .pipe(gulp.dest('build/font-awesome/fonts'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.html, ['minify-html']);
    gulp.watch(paths.scripts, ['minify-js']);
    gulp.watch(paths.scss, ['sass']);
});

// Run it when css or other less rapid file changes
gulp.task('compile-sass', ['sass']);
gulp.task('build-project', ['minify-html','minify-js','minify-css','copy-assets', 'sass', 'watch']);
