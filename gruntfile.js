module.exports=function(grunt){
    var path=require('path');
    
    var srcPath='src',
        destPath='dest';
    
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify:{
            options:{
                banner:'/*\n   <%= pkg.name %> ,version <%= pkg.version %> ,updated on <%= grunt.template.today("yyyy-mm-dd") %>\n   <%= pkg.description %>\n\n   <%= pkg.homepage %>\n */\n\n'
            },
            build:{
                files:grunt.file.expandMapping([srcPath+'/*.js'], '', {
                    rename: function(base,file) {
                        var name=path.basename(file),
                            min=destPath+'/'+name;
                        
                        return min.replace('.js', '.min.js');
                    }
                })
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default',['uglify']);
};