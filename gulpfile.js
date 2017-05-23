var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var minifyCss 	= require("gulp-minify-css");
var uglify 		= require("gulp-uglify");
var concat  	= require('gulp-concat');

gulp.task('sass', function(){
	return gulp.src('app/scss/*.scss')	
	// Converts Sass to CSS with gulp-sass
	.pipe(sass()) 
	// .pipe(minifyCss())
	.pipe(gulp.dest('public/css'));

});

gulp.task('js', function(){
	return gulp.src('app/js/*.js')	
	//.pipe(uglify())
	.pipe(concat('app.js'))
	.pipe(gulp.dest('public/js'))

});


// Gulp watch syntax
gulp.task('watch', function(){
	gulp.watch('app/scss/*.scss', ['sass']); 
	gulp.watch('app/js/*.js', ['js']); 

});

gulp.task('default', ['sass', 'js']);