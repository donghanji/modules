/*
 * css-adapter
 * http://github.com/donghanji/css-adapter/
 *
 * Copyright (c) 2013 donghanji, contributors
 * Licensed under the MIT license.
 */

'use strict';
var path=require('path');

module.exports = function(grunt) {
    var zh_reg=/[\u4e00-\u9fa5]/;
    //add task name here
    var tasks=['jquery','zepto','ajaxfileupload','flexslider'];

    //
    grunt.initConfig({
        concat: {
            options: {},
            jquery: {
                src: ['src/jquery/jquery.module.start.js','libs/jquery/jquery.js','src/jquery/jquery.module.end.js'],//
                dest: 'dist/jquery.module.js'//
            },
            zepto:{
              src: ['src/zepto/zepto.module.start.js','libs/zepto/src/zepto.js','libs/zepto/src/event.js','libs/zepto/src/callbacks.js','libs/zepto/src/ajax.js','libs/zepto/src/form.js','libs/zepto/src/fx.js','libs/zepto/src/fx_methods.js','libs/zepto/src/assets.js','libs/zepto/src/data.js','libs/zepto/src/selector.js','libs/zepto/src/touch.js','src/zepto/zepto.module.end.js'],//
              dest: 'dist/zepto.module.js'
            },
            ajaxfileupload: {
                src: ['src/ajaxfileupload/ajaxfileupload.module.start.js','libs/ajaxfileupload/ajaxfileupload.js','src/ajaxfileupload/ajaxfileupload.module.end.js'],//
                dest: 'dist/ajaxfileupload.module.js'//
            },
            flexslider: {
                src: ['src/jquery.flexslider/jquery.flexslider.module.start.js','libs/jquery.flexslider/jquery.flexslider.js','src/jquery.flexslider/jquery.flexslider.module.end.js'],//
                dest: 'dist/jquery.flexslider.module.js'//
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
            flexslider: {
                src: 'dist/jquery.flexslider.module.js',//
                dest: 'dist/jquery.flexslider.module.min.js'//
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //defautl all
    grunt.registerTask('default',['concat','uglify']);

    //regist task
    tasks.forEach(function(value,index){
      var concat='concat:'+value;
      var uglify='uglify:'+value;
      grunt.registerTask(value,[concat,uglify]);
    });
};
