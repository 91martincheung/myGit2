//gulp
// var gulp = require("gulp");
// gulp.src("codedfj/html/*").pipe(gulp.dest("codedfj/html"));

//任务
// var gulp = require("gulp");
// gulp.task("one",function(){
//     console.log("one");
// });
var gulp = require("gulp");
var htmlmin= require("gulp-htmlmin");
gulp.task("htmlTask",function(){
    gulp.src("02_dafeiji.html").pipe(htmlmin()).pipe(gulp.dest("html"));
})
gulp.task("default",["htmlTask"]);