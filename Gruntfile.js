'use strict';

module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);
	
	grunt.initConfig({
		babel: {
			options: {
				sourceMap: true,
				presets: ['env'],
				minified: true,
				ignore: [
					'src/styles/*.js'
				]
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'src/',
						src: ['**/*.js'],
						dest: 'dist/'
					}
			]
			}
		}
	});

	grunt.registerTask('default', ['babel']);
}