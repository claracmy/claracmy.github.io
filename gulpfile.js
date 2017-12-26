const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

gulp.task('js', () => {
  return gulp.src('js/**/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('sass', () => {
  return gulp.src('scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('fonts', () => {
  return gulp.src('fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(plumber())
    .pipe(gulp.dest('public/fonts'))
    .pipe(browserSync.stream());
});

gulp.task('images', () => {
  return gulp.src('images/**/*.{png,jpg,jpeg,gif,ico}')
    .pipe(plumber())
    .pipe(gulp.dest('public/images'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['js', 'sass'], () => {
  browserSync.init({
    server: './',
    port: 8000,
    files: ['public/**/*.*'],
    reloadDelay: 500
  });
});

gulp.task('default', ['sass', 'js', 'images', 'fonts', 'serve'], () => {
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('*.html').on('change', reload);
  gulp.watch('js/**/*.js', ['js']);
  gulp.watch('images/**/*.{png,jpg,jpeg,gif,ico}', ['images']);
  gulp.watch('fonts/**/*.{eot,svg,ttf,woff,woff2}', ['fonts']);
});

gulp.task('deploy', ['sass', 'js', 'images', 'fonts']);
