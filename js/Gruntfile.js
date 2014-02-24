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
        jshintrc : 'grunt/jshint/.jshintrc',
        "smarttabs" : true
      },
      js: [cfg.js_source_path+'**/*.js', '!'+cfg.js_source_path+'libs/*.js', '!'+cfg.js_source_path+'libs/utils/*.js', '!'+cfg.js_source_path+'libs/jquery/*.js', '!'+cfg.js_source_path+'libs/yoson/old_modules/*.js', '!'+cfg.js_source_path+'libs/yoson/data/*.js']
    }
  });

  //loadNpmTasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Run Default task(s).
  grunt.registerTask('default', ['coffee','jshint']);

};
