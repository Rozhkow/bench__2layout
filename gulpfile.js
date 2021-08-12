const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");
const autoprefixer = require("gulp-autoprefixer");
//const postcss = require('gulp-postcss');

gulp.task("sass-compile", function () {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./css/"));
});

gulp.task("watch", function () {
  gulp.watch("./scss/**/*.scss", gulp.series("sass-compile"));
});
