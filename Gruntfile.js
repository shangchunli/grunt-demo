module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      files: {
        'rectangle.min.js': 'rectangle.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};
