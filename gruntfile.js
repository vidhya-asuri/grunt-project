var fs = require('fs');

module.exports = function(grunt){
  'use strict';

  grunt.initConfig({
    default:{
       taskOwner: 'Vidhya',
       src: 'js/name.js',
       dest: 'js/name_default.js'
    },
    taskWithMultipleConfigs: {
       config1:{
          message: 'This is the message from config1',
          files: { 
            'js/location_twmc.js': 'js/location.js'  // twmc = task with multiple configs 
          }
       },
       config2: {
          message: 'This is the message from config2',
          files: [
            {
              src: 'js/location.js',
              dest: 'js/location_twmc.js'
            }
          ]
       }
    }
  });

  grunt.registerTask('default', 'This is the default task', function(arg1){
    var done = this.async();
    grunt.config.requires('default.taskOwner');
    grunt.log.writeln('grunt running...' + this.name, 'with options: ' + grunt.config.get('default.taskOwner'));
    grunt.log.writeln('js file : '+ grunt.config.get('default.src'));
    fs.readFile(grunt.config.get('default.src'), function(error,data){
       grunt.log.writeln(data);
       fs.writeFile(grunt.config.get('default.dest'), data);
    });
    done();
  });

  grunt.registerMultiTask('taskWithMultipleConfigs','An example task with multiple configs', function(){
     grunt.log.writeln(this.data.message);
     this.files.forEach(function(file){
        grunt.log.writeln(file.src + ' ' + file.dest);
     });
  }); 


  grunt.registerTask('master_task','Run all tasks (mother of all tasks)',['default']);


}
