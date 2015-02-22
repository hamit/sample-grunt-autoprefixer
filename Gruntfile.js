module.exports = function ( grunt ) {
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('jspoly', ['autopolyfiller']);
  grunt.initConfig( {
	autoprefixer: {
		options: {
		  browsers: ['last 2 versions', 'ie 8', 'ie 9', 'Safari 6']
		},
		dist: {
			files: {
				'prefix_result.css': 'css_to_be_autoprefixed.css'
			}
		}
	},
	watch: {
		styles: {
			files: ['css_to_be_autoprefixed.css'],
			tasks: ['autoprefixer']
		}
	}
  } );
};
