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
        cwd: 'frontend/coffee/',
        src: ['*.coffee','!_*.coffee'],
        dest: 'public/js/',
        ext: '.js'
      }
    },
    //jshint
    jshint: {
      options: {
        jshintrc : '.jshintrc'
      },
      js: ['public/js/*.js']
    },
    //watch
    /*echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p*/
    watch: {
      coffee: {
        files: 'frontend/coffee/*.coffee',
        tasks: ['coffee', 'jshint'],
        options: {
          interrupt: true
        }
      },
      jade: {
        files: ['frontend/jade/*.jade'],
        tasks: ['jade'],
        options: {
          interrupt: true
        }
      },
      stylus: {
        files: ['frontend/styl/*.styl'],
        tasks: ['stylus'],
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
          cwd: 'frontend/jade/',
          src: [ '**/*.jade', '!config/*.jade', '!layout/*.jade', '!render/*.jade'],
          dest: 'html',
          ext: '.html'
        }]
      }
    },
    //stylus
    stylus: {
      compile: {
        options: {
          paths: ['frontend/stylus']
        },
        files: [{
          expand: true,
          cwd: 'frontend/styl/',
          src: [ '**/*.styl'],
          dest: 'public/css',
          ext: '.css'
        }]
      }
    }
  });

  //loadNpmTasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Run Default task(s).
  grunt.registerTask('default', ['coffee', 'jshint']);


};