const { src, dest } = require("gulp");

function defaultTask(cb) {
  src("package.json").pipe(dest("dist/"));
  src("package-lock.json").pipe(dest("dist/"));
  src("src/**/*").pipe(dest("dist/app"));
  cb();
}

exports.default = defaultTask;
