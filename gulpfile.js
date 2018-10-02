var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		sass = require('gulp-sass');


// Static Server + watching scss/html files
gulp.task('serve', function() {

	browserSync.init({
			server: "./resume",
			notify: false
	});

	gulp.watch("*.scss", ['sass']);
	gulp.watch("resume/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src("*.scss")
		.pipe(sass({indentType: 'tab', indentWidth: 1 }).on('error', sass.logError))
		.pipe(gulp.dest("resume"))
		.pipe(browserSync.stream());
});

gulp.task('default', ['sass', 'serve']);