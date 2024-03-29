module.exports = function (grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: "**/*.scss",
        tasks: ['sass']
      }
    },
    // SASS task config
    sass: {
      dev: {
        options: {
          style: 'expanded',
          require: 'susy'
        },
        files: {
          // destination         // source file
          "style.css" : "sass/main.scss"
        }
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "*.css",
            "*.html"
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          },
          ghostMode: {
            scroll: true,
            links: true,
            forms: true
          }
        }
      }
    },
    jasmine: {
      src: 'src/*.js',
      options: {
        specs: 'specs/*.js'
      }
    },
    jshint: {
      all: ['src/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['browserSync', 'watch']);
};
