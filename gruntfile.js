


module.exports=function(grunt){
    //
    var _tasks=['jquery','zepto','ajaxfileupload','flexslider','marked','datetimepicker'];

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        concat: {
            options: {
                //
            },
            jquery: {
                src: ['src/jquery/jquery.module.start.js','libs/jquery/jquery.js','src/jquery/jquery.module.end.js'],//
                dest: 'dist/jquery.module.js'//
            },
            zepto:{
                src: ['src/zepto/zepto.module.start.js','libs/zepto/src/zepto.js','libs/zepto/src/event.js','libs/zepto/src/callbacks.js','libs/zepto/src/ajax.js','libs/zepto/src/form.js','libs/zepto/src/fx.js','libs/zepto/src/fx_methods.js','libs/zepto/src/assets.js','libs/zepto/src/data.js','libs/zepto/src/selector.js','libs/zepto/src/touch2.js','src/zepto/zepto.module.end.js'],//
                dest: 'dist/zepto.module.js'
            },
            ajaxfileupload: {
                src: ['src/ajaxfileupload/ajaxfileupload.module.start.js','libs/ajaxfileupload/ajaxfileupload.js','src/ajaxfileupload/ajaxfileupload.module.end.js'],//
                dest: 'dist/ajaxfileupload.module.js'//
            },
            flexslider: {
                src: ['src/jquery.flexslider/jquery.flexslider.module.start.js','libs/jquery.flexslider/jquery.flexslider.js','src/jquery.flexslider/jquery.flexslider.module.end.js'],//
                dest: 'dist/jquery.flexslider.module.js'//
            },
            marked: {
                src: ['src/marked/marked.module.start.js','libs/marked/marked.js','src/marked/marked.module.end.js'],//
                dest: 'dist/marked.module.js'//
            },
            marked: {
                src: ['src/marked/marked.module.start.js','libs/marked/marked.js','src/marked/marked.module.end.js'],//
                dest: 'dist/marked.module.js'//
            },
            'bootstrap-datetimepicker':{
                src: ['src/bootstrap-datetimepicker/bootstrap-datetimepicker.module.start.js','libs/bootstrap-datetimepicker/bootstrap-datetimepicker.js','src/bootstrap-datetimepicker/bootstrap-datetimepicker.module.end.js'],//
                dest: 'dist/bootstrap-datetimepicker/bootstrap-datetimepicker.module.js'//
            },
            'datetimepicker':{
                src: ['src/bootstrap-datetimepicker/datetimepicker.start.js','src/bootstrap-datetimepicker/datetimepicker.end.js'],//
                dest: 'dist/bootstrap-datetimepicker/datetimepicker.js'//
            }
        },
        uglify: {
            jquery:{
              src: 'dist/jquery.module.js',//
              dest: 'dist/jquery.module.min.js'//
            },
            zepto:{
                src: 'dist/zepto.module.js',//
                dest: 'dist/zepto.module.min.js'//
            },
            ajaxfileupload:{
                src: 'dist/ajaxfileupload.module.js',//
                dest: 'dist/ajaxfileupload.module.min.js'//
            },
            flexslider: {
                src: 'dist/jquery.flexslider.module.js',//
                dest: 'dist/jquery.flexslider.module.min.js'//
            },
            marked: {
                src: 'dist/marked.module.js',//
                dest: 'dist/marked.module.min.js'//
            },
            'bootstrap-datetimepicker': {
                src: ['dist/bootstrap-datetimepicker/bootstrap-datetimepicker.module.js'],//
                dest: 'dist/bootstrap-datetimepicker/bootstrap-datetimepicker.module.min.js'//
            },
            'bootstrap-datetimepicker-lan': {
                expand: true,
                cwd:'libs/bootstrap-datetimepicker/locales/',
                src: ['*.js'],//
                dest: 'dist/bootstrap-datetimepicker/locales/'//
            },
            'datetimepicker': {
                src: ['dist/bootstrap-datetimepicker/datetimepicker.js'],//
                dest: 'dist/bootstrap-datetimepicker/datetimepicker.min.js'//
            },
        },
        /*copy:{
            'bootstrap-datetimepicker':{
                cwd:'libs/bootstrap-datetimepicker/locales/',
                src:['*.js'],//
                dest:'dist/bootstrap-datetimepicker/locales/'
            }
        }*/
    });
    //
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //
    grunt.registerTask('default',['concat','uglify'/*,'copy'*/]);

    //regist task
    _tasks.forEach(function(value,index){
      var concat='concat:'+value;
      var uglify='uglify:'+value;
      grunt.registerTask(value,[concat,uglify]);
    });
};