'use strict';

var gulp = require('gulp');
// var $ = require('gulp-load-plugins')();
var rename =  require("gulp-rename");
var markJSON = require('markit-json');
var docUtil = require('amazeui-doc-util');

gulp.task('markdoc', function(){
  return gulp.src('DOC.md')
    .pipe(markJSON(docUtil.markedOptions))
    .pipe(docUtil.applyTemplate(null, {
      pluginTitle: 'am-md',
      pluginDesc: '使用 Amaze UI 样式风格的 markdown 插件。',
      head: '<link rel="stylesheet" href="css/am-md.css">',
      footer: '<script src="js/md.js"></script><script src="js/tomd.js"></script><script src="js/am-md.js"></script><script src="js/am-cus.js"></script><script src="js/am-btn.js"></script>'
    }))
    .pipe(rename(function(file) {
      file.basename += '-doc';
      file.extname = '.html';
    }))
    .pipe(gulp.dest(''));
});
