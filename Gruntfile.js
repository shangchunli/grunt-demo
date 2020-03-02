module.exports = function (grunt) {
    grunt.initConfig({
     htmlhint: {
        option:{
          htmlhint:'./.htmlhintrc'
        },
        src:['*.html']
      }
    });
  
    grunt.loadNpmTasks('grunt-htmlhint');

    grunt.registerTask('default', ['htmlhint']);
  };