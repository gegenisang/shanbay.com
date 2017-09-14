var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

var paths = {
    src: "src",
    sass: "src/sass",
    dist: "dist"

}
gulp.task('img', function() {
    return gulp.src(paths.src + "/img/**/*")
        .pipe(gulp.dest(paths.dist + "/img"));
});


gulp.task('lib', function() {
    return gulp.src("bower_components/**/*")
        .pipe(gulp.dest(paths.dist + "/bower_components"));
});

gulp.task("sass", function() {
    return gulp.src(paths.sass + "/**/*.scss")
        // .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.dist + '/css'));
});

gulp.task("html", function() {
    return gulp.src(paths.src + "/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function() {
    gulp.watch(paths.sass + "/**/*.scss", ["sass"]);
    gulp.watch(paths.src + "/**/*.html", ['html']);
    gulp.watch(paths.src + "/img/**/*.*", ["img"]);
});