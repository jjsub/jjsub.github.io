'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // ---------------------------------------------------------------------- //
    watch: {
      code: {
        options: {livereload: true},
        files: ['Gruntfile.js', 'client/**/*'],
        tasks: ['build']
      }
    },
    // ---------------------------------------------------------------------- //
    jshint: {
      options: {jshintrc: '.jshintrc', reporter: require('jshint-stylish')},
      all: ['Gruntfile.js', 'client/**/*.js']
    },
    // ---------------------------------------------------------------------- //
    jscs: {
      src: '<%= jshint.all %>',
      options: {
        config: '.jscsrc',
        reporter: 'console'
      }
    },
    // ---------------------------------------------------------------------- //
    jade: {
      build: {
        files: [{
          cwd: 'client',
          src: '**/*.jade',
          dest: './',
          ext: '.html',
          expand: true
        }]
      }
    },
    // ---------------------------------------------------------------------- //
    less: {
      build: {
        files: [{
          cwd: 'client',
          src: '**/*.less',
          dest: './',
          ext: '.css',
          expand: true
        }]
      }
    },
    // ---------------------------------------------------------------------- //
    clean: {
      server: './'
    },
    // ---------------------------------------------------------------------- //
    shell: {
      bower: {
        command: 'bower install'
      }
    },
    // ---------------------------------------------------------------------- //
    copy: {
      js: {
        cwd: 'client',
        src: ['**/*.js'],
        dest: './',
        expand: true
      },
      assets: {
        cwd: 'client/assets',
        src: ['**/*'],
        dest: './assets',
        expand: true
      },
      favicon: {
        cwd: 'client',
        src: ['favicon.ico'],
        dest: './',
        expand: true
      }
    }
    // ---------------------------------------------------------------------- //
  });

  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('deploy', ['clean', 'build', 'shell:bower']);
  grunt.registerTask('build', ['jshint:all', 'jscs', 'jade', 'less', 'copy:js', 'copy:assets', 'copy:favicon']);
  grunt.registerTask('default', ['build', 'watch']);
};
