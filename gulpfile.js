'use strict';

const del = require('del');
const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('clean', function () {
	return del(['dist']);
});

gulp.task('build', ['clean'], function () {
	const project = ts.createProject('tsconfig.json');
	const res = gulp.src('lib/**/*.ts').pipe(project());
	return res.js.pipe(gulp.dest('dist'));
});
