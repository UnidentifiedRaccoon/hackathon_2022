const { src, dest, series, task } = require("gulp");
const gulpClean = require("gulp-clean");

task('clean', () => {
  return src('dist', {
    allowEmpty: true,
    read: false,
  })
    .pipe(gulpClean())
});

task('build', () => {
  return src("package.json")
    .pipe(dest("dist/"))
    .pipe(src("package-lock.json"))
    .pipe(dest("dist/"))
    .pipe(src("src/**/*"))
    .pipe(dest("dist/app"))
})

exports.default = series('clean', 'build');
