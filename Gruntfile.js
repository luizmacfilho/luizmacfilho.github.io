module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/main.js',
        dest: 'dist/main.min.js'
      }
    },
    cssmin: {
      target: {
        src: ["css/global/*.css", "css/*.css"],
        dest: "dist/styles.min.css"
      }
    },
    watch: {
      css: {
        files: 'css/**/*.css',
        tasks: ['cssmin'],
      },
      js: {
        files: 'js/main.js',
        tasks: ['uglify'],
      },
    },
  });

  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks.
  grunt.registerTask('default', ['cssmin', 'uglify']);

};
