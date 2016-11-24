/**
 * 组件安装
 * npm install gulp-util gulp-imagemin gulp-ruby-sass gulp-minify-css gulp-minify-html gulp-load-plugins gulp-jshint gulp-uglify gulp-rename gulp-concat gulp-clean --save-dev
 * imagemin 图片压缩
 * rubySass sass压缩
 * minifyCss css压缩
 * jshint js检查
 * uglify js压缩
 * minifyHtml  html压缩
 * rename 文件重命名
 * concat 文件合并
 * clean  清空文件夹
 * gulp-load-plugins  自动加载
 */


var gulp = require('gulp');

//加载gulp-load-plugins插件，并马上运行它
var plugins = require('gulp-load-plugins')();


//默认的任务
/*gulp.task('default',function(){
    //进行文件监控，文件变动触发执行任务
    gulp.watch('staticDev/css/!*.css', ['pcCss']);
    gulp.watch('staticDev/demo/css/!*.css', ['telCss']);
    gulp.watch('staticDev/js/!*.js', ['pcJs']);
    gulp.watch('staticDev/demo/js/!*.js', ['telJs']);
    gulp.watch('staticDev/images/!*', ['pcImg']);
    gulp.watch('staticDev/demo/images/!*', ['telImg']);
});*/

gulp.task('default',['css','js','img']);


//css压缩
gulp.task('css', function () {
    var cssSrc = ['staticDev/css/*.css','!staticDev/css/*.min.css'],
        cssDst = './static-dev/css/';
    gulp.src(cssSrc) //要压缩的文件
        .pipe(plugins.minifyCss()) //压缩
        .pipe(gulp.dest(cssDst));  //压缩后的文件路径

    var cssDemoSrc = ['staticDev/demo/css/*.css','!staticDev/demo/css/*.min.css'],
        cssDemoDst = './static-dev/demo/css/';
    gulp.src(cssDemoSrc) //要压缩的文件
        .pipe(plugins.concat('main.css'))//合并文件，文件名为main.css
        .pipe(plugins.minifyCss()) //压缩
        .pipe(plugins.rename({ suffix: '.min' }))  //改字，加上min标志
        .pipe(gulp.dest(cssDemoDst));  //压缩后的文件路径
});


//JS压缩
gulp.task('js', function () {
    var jsSrc = ['staticDev/js/*.js','!staticDev/js/*.min.js'],
        jsDst = 'static-dev/js/';
    gulp.src(js)
        .pipe(plugins.uglify())
        .pipe(gulp.dest(js));

    var jsDemoSrc = ['staticDev/demo/js/*.js','!staticDev/demo/js/*.min.js'],
        jsDemoDst = 'static-dev/demo/js/';
    gulp.src(jsDemoSrc)
        .pipe(plugins.concat('main.jf'))
        .pipe(plugins.uglify())
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(gulp.dest(jsDemoDst));
});

//img压缩
gulp.task('img', function () {
    var imgSrc = 'staticDev/images/*',
        imgDst = 'static-dev/images/';
    gulp.src(imgSrc)
        .pipe(plugins.imagemin())
        .pipe(gulp.dest(imgDst));

    var imgDemoSrc = 'staticDev/demo/images/*',
        imgDemoDst = 'static-dev/demo/images/';
    gulp.src(imgDemoSrc)
        .pipe(plugins.imagemin())
        .pipe(gulp.dest(imgDemoDst));
});