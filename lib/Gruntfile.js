module.exports = function(grunt){

    grunt.initConfig({
        browserify: {
            '../dist/bundle.js': ['../javascripts/**']
        },
        jshint: {
          options: {
            predef: ["document", "console", "$", "event", "target", "alert", "XMLHttpRequest", "new", "window", "require", "currentTarget", "firebase", "$scope", "$window", "localStorage"],
            esnext: true,
            globalstrict: true,
            globals: {"angular": true, "app":true, "$":true},
            browserify: true
          },
          files: ['../javascripts/*.js']
    },
        sass: {
            dist:{
                files: {
                    '../css/main.css': '../sass/styles.scss'
                }
            }
        },
        watch: {
            javascripts: {
                files: ['../javascripts/**/*.js'],
                tasks: ['jshint']
            },
            browserify: {
                files: ['../app/**/*.js'],
                tasks: ["browserify"]
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'browserify', 'watch']);

};