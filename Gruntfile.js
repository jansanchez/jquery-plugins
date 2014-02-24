module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    //coffee
    coffee: {
      glob_to_multiple: {
        options: {
          bare: true
        },
        expand: true,
        cwd: 'coffee/',
        src: ['*.coffee','!_*.coffee'],
        dest: 'js/',
        ext: '.js'
      }
    },
    //jshint
    jshint: {
      options: {
        jshintrc : '.jshintrc'
      },
      js: ['js/*.js']
    }
  });

  //loadNpmTasks
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Run Default task(s).
  grunt.registerTask('default', ['coffee', 'jshint']);

};