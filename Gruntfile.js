
// # Gruntfile

var path = require('path')

module.exports = gruntFile

function gruntFile(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: "/*!\n * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today('yyyy-mm-dd') %>\n */\n",
    clean: {
      all: {
        dist: [
          'dist/<%= pkg.version %>'
        ]
      }
    },
    copy: {
      popup: {
        src: 'src/popup.html',
        dest: 'dist/<%= pkg.version %>/src/popup.html'
      },
      icons: {
        expand: true,
        cwd: 'icons/',
        src: '**/*.png',
        dest: 'dist/<%= pkg.version %>/icons/'
      },
      manifest: {
        src: 'manifest.json',
        dest: 'dist/<%= pkg.version %>/manifest.json'
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      all: [
        'src/**/*.js'
      ]
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      src: {
        expand: true,
        cwd: 'src/',
        src: '**/*.js',
        dest: 'dist/<%= pkg.version %>/src/',
        ext: '.js'
      }
    },
    compress: {
      dist: {
        options: {
          archive: 'dist/<%= pkg.version %>.zip'
        },
        files: {
          src: 'dist/<%= pkg.version%>/**/**',
          dest: './'
        }
      }
    }
  })

  // <https://github.com/gruntjs/grunt-contrib-clean>
  grunt.loadNpmTasks('grunt-contrib-clean')

  // <https://github.com/gruntjs/grunt-contrib-copy>
  grunt.loadNpmTasks('grunt-contrib-copy')

  // <https://github.com/gruntjs/grunt-contrib-uglify>
  grunt.loadNpmTasks('grunt-contrib-uglify')

  // <https://github.com/gruntjs/grunt-contrib-jshint>
  grunt.loadNpmTasks('grunt-contrib-jshint')

  // <https://github.com/gruntjs/grunt-contrib-compress>
  grunt.loadNpmTasks('grunt-contrib-compress')

  // Register all grunt tasks as default
  grunt.registerTask('default', [
    'clean',
    'copy',
    'jshint',
    'uglify',
    'compress'
  ])

}
