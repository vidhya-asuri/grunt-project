var fs = require('fs');

module.exports = function(grunt){
  'use strict';

  grunt.initConfig({
    jshint: {
      files: {
        src: ['js/**/*.js']
      }
    },
    coffee: {
      dist: {
        files: {
          'dist/js/coffee.js' : 'coffee/**/*.coffee'
        }
      },
      options: {
         sourceMap: true    
      }
    },
    sass:{
      dist: {
        files:{
          'dist/css/styles.css':'sass/**/*.scss'
        }
      },
      options: {
         sourceMap: true    
      }
    }

  });

  grunt.registerTask('default', ['jshint','coffee','sass']); // jshint task is an alias of the default task

  /*grunt.registerTask('default', 'This is the default task', function(arg1){
  }); */
  /*grunt.registerMultiTask('taskWithMultipleConfigs','An example task with multiple configs', function(){
  }); */

  grunt.registerTask('master_task','Run all tasks (mother of all tasks)',['default']);
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-sass');

}
