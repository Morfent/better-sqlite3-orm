'use strict';

const child_process = require('child_process');
const path = require('path');

const del = require('del');
const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('preinstall', function () {
	// BSD flavours don't have gcc49 installed by default. better-sqlite3 has it as
	// a dependency, so rather than force users to troubleshoot, let's tell them
	// nicely what's up.
	const UNIX_PLATFORMS = new Set(['darwin', 'freebsd', 'sunos']);
	if (UNIX_PLATFORMS.has(process.platform)) {
		let pathname;
		try {
			pathname = child_process.execSync('readlink $(which g++)', {encoding: 'utf8'});
		} catch (e) {
			throw new Error('g++49 must be installed and be symlinked to /usr/local/bin/g++ in order for better-sqlite3 to be able to be installed. If you have a newer version of gcc symlinked, edit ./node_modules/lzz-gyp/lzz-source/Makefile.release to use the correct version in its CC setting.');
		}

		if (path.basename(pathname).trim() !== 'g++49') {
			throw new Error('g++49 must be installed and be symlinked to /usr/local/bin/g++ in order for better-sqlite3 to be able to be installed. If you have a newer version of gcc symlinked, edit ./node_modules/lzz-gyp/lzz-source/Makefile.release to use the correct version in its CC setting.');
		}
	}
});

gulp.task('clean', function () {
	return del(['dist']);
});

gulp.task('build', ['clean'], function () {
	const project = ts.createProject('tsconfig.json');
	const res = gulp.src('lib/**/*.ts').pipe(project());
	return res.js.pipe(gulp.dest('dist'));
});
