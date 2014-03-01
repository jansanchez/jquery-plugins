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
    },
    //watch
    /*echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p*/
    watch: {
      coffee: {
        files: 'coffee/*.coffee',
        tasks: ['coffee', 'jshint'],
        options: {
          interrupt: true
        }
      },
      jade: {
        files: ['jade/*.jade'],
        tasks: ['jade'],
        options: {
          interrupt: true
        }
      },
    },
    //jade
    jade: {
      compile: {
        options: {
          data: {}
        },
        files: [{
          expand: true,
          cwd: 'jade/',
          src: [ '**/*.jade', '!config/*.jade', '!layout/*.jade', '!render/*.jade'],
          dest: 'html',
          ext: '.html'
        }]
      }
    },
  });

  //loadNpmTasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Run Default task(s).
  grunt.registerTask('default', ['coffee', 'jshint']);


};