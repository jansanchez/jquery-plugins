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
        src: ['**/*.coffee','!**/_*.coffee'],
        dest: 'public/js/',
        ext: '.js'
      }
    },
    //jshint
    jshint: {
      options: {
        jshintrc : '.jshintrc'
      },
      js: ['public/js/src/*.js']
    },
    //watch
    /*echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p*/
    watch: {
      coffee: {
        files: 'frontend/coffee/**/*.coffee',
        tasks: ['coffee', 'jshint'],
        options: {
          interrupt: true
        }
      },
      jade: {
        files: ['frontend/jade/*.jade'],
        tasks: ['jade'],
        options: {
          pretty: true,
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
          pretty: true
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
    },
    /*
    exec: {
      jasmine: {
        command: 'phantomjs public/js/libs/run-jasmine.js html/SpecRunner.html'
      }
    },
    */
    jasmine: {
      phantomjs: {
        src: ['public/js/src/*.js'],
        options: {
          specs: ['public/js/spec/*Spec.js'],
          helpers: ['public/js/spec/*Helper.js'],
          vendor: ['public/js/libs/jquery/dist/jquery.min.js', 'public/js/libs/jasmine-2.0.0/jasmine.js']
        }
      }
    }
  });

  //loadNpmTasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  
  // Run Default task(s).
  grunt.registerTask('html', ['jade']);
  grunt.registerTask('js', ['coffee', 'jshint']);
  grunt.registerTask('css', ['stylus']);

  //grunt.registerTask('utest2', ['exec:jasmine']);
  grunt.registerTask('utest', ['jasmine:phantomjs']);

  grunt.registerTask('default', ['html', 'js', 'css', 'utest']);


};