var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    cmdPack = require('gulp-cmd-pack'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

var paths = {
    sass: './src/sass/*.scss',
    javascript: './src/javascripts/*.js'
}

gulp.task('sassimagemin', function() {
    return gulp.src('./src/sass/images/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('./src/stylesheets/images'))
        .pipe(rev())
        .pipe(gulp.dest('./dist/stylesheets/images'))
        .pipe(rev.manifest('sassimages.json'))
        .pipe(gulp.dest('./sassrev'));
});


gulp.task('sass', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/stylesheets'))
        .pipe(minifycss())
        .pipe(rev())
        .pipe(gulp.dest('./dist/stylesheets'))
        .pipe(rev.manifest('css.json'))
        .pipe(gulp.dest('./rev'));
})

gulp.task('sassrev', function() {
    return gulp.src(['./sassrev/*.json', './dist/stylesheets/*.css'])
        .pipe(revCollector())
        .pipe(gulp.dest('./dist/stylesheets'));
})

gulp.task('javascript', function() {
    return gulp.src(['./src/javascripts/jquery.min.js', './src/javascripts/main.js', './src/swiper.min.js'])
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./dist/javascripts'))
        .pipe(rev.manifest('javascript.json'))
        .pipe(gulp.dest('./rev'));
})

gulp.task('imagemin', function() {
    return gulp.src('./src/images/*.{png, jpg, gif,ico}')
        .pipe(imagemin())
        .pipe(rev())
        .pipe(gulp.dest('./dist/images'))
        .pipe(rev.manifest('images.json'))
        .pipe(gulp.dest('./rev'));
})

gulp.task('rev', function() {
    return gulp.src(['./rev/*.json', './src/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./dist'));
})

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.javascript, ['javascript']);
})

gulp.task('default', ['sassimagemin', 'sass', 'sassrev', 'javascript', 'imagemin', 'rev', 'watch']);
