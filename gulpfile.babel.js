'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import mqpacker from 'css-mqpacker';
import { create as bsCreate } from 'browser-sync';
import { exec as exec } from 'child_process';


const browserSync = bsCreate();
const $ = gulpLoadPlugins();

const dirs = {
	src: './scss/',
	dest: './build/'
};

const paths = {
	sass: {
		main: 'carapace.scss',
		src: dirs.src,
		dest: dirs.dest,
		ext: '.+(scss|css)'
	},
	styleguide: {
		src: dirs.src,
		dest: './styleguide/',
		ext: '.+(html|md)'
	},
	test: {
		dest: dirs.dest
	}
};

const config = {
	sass: {
		outputStyle: 'expanded',
		includePaths: ['node_modules']
	},
	autoprefixer: {
		browsers: ['last 2 versions']
	},
	mqpacker: {
		sort: true
	}
};



/* 
* `gulp sass`
* -------------
* – Glob import .scss files
* - Compile Sass to CSS
* - Apply PostCSS transforms
* - Generate minified CSS file
*/

gulp.task('sass', () => {

	return gulp.src( paths.sass.src + paths.sass.main )

		.pipe( $.sourcemaps.init() )

		.pipe( $.sass( config.sass )
			.on('error', $.sass.logError) )

		.pipe( $.postcss([

			autoprefixer( config.autoprefixer ),
			mqpacker( config.mqpacker )

		]) )

	.pipe( gulp.dest( paths.sass.dest ) )

		.pipe( $.postcss([
			cssnano()
		]) )

		.pipe( $.rename( (path) => {
			path.extname = '.min.css'
		}) )

	.pipe( $.size({ title: 'minified' }) )
	.pipe( $.size({ title: 'minified, gzipped', gzip: true }) )

	.pipe( $.sourcemaps.write() )
	
	.pipe( gulp.dest( paths.sass.dest ) )

});



/* 
* `gulp styleguide`
* ------------
* – Build KSS documentation
*/

gulp.task('styleguide', ['sass'], () => {
	gulp.src( paths.sass.dest + 'carapace.min.css' )
	.pipe( gulp.dest( paths.styleguide.dest ) );

	gulp.src( './styleguide-theme/styleguide.js' )
	.pipe( gulp.dest( paths.styleguide.dest ) );

	gulp.src( './styleguide-theme/styleguide.scss' )
		.pipe( $.sass( config.sass )
			.on('error', $.sass.logError) )

		.pipe( $.postcss([
			autoprefixer( config.autoprefixer ),
			mqpacker( config.mqpacker )
		]) )

		.pipe( $.postcss([
			cssnano()
		]) )

		.pipe( $.rename( (path) => {
			path.extname = '.min.css'
		}) )
			
	.pipe( gulp.dest( paths.styleguide.dest ) );

	return exec('npm run kss', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
	});
});


/* 
* `gulp watch`
* ------------
* – Watch source files for changes
* - Run relevant tasks on change
*/

gulp.task('watch', () => {

	var _glob = ( resource ) => {
		return paths[resource].src + '**/*' + paths[resource].ext;
	}

	$.watch([ _glob('sass')], ( file ) => {
		gulp.start('styleguide');
	});

});



/* 
* `gulp serve`
* ------------
* – Serve build directories
*/

gulp.task('serve', () => {

	browserSync.init({
		server: {
			baseDir: paths.styleguide.dest
		}
	});

	gulp.watch( dirs.dest + '/**/*' ).on( 'change', () => {
		browserSync.reload();
	});

});



/* 
* `gulp`
* ------
* – Run `gulp sass`
*/

gulp.task('default', ['styleguide']);
