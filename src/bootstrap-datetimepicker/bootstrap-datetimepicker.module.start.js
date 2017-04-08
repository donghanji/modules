/*
 * @name ajaxfileupload Module

 * @desc
    ajaxfileupload as a module.

        to see:


 */
(function(global,undefined){
  if(module.declare === undefined){

      throw 'There is no global module.declare method!';
  }
  var $global=module.globals('$');
  
  //define bootstrap-datetimepicker.module
  module.declare('bootstrap-datetimepicker.module',[$global],function(require){
  	//
  	var jQuery=require($global);
    var define=global.define||module.declare||{};
    define.amd=null;
      
