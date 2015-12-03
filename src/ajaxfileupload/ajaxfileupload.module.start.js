/*
 * @name ajaxfileupload Module

 * @desc
  ajaxfileupload as a pm module.

  to see:


*/
(function(global,undefined){
  if(module.declare === undefined){

    throw 'There is no global module.declare method!';
  }
  var $global=module.globals('$');
  /*module.files({
    'ajaxfileupload':'ajaxfileupload'
  });*/
  //jquery plugin must been loaded
  module.declare([$global],function(){
    //define ajaxfileupload.module
    module.declare('ajaxfileupload.module',[$global],function(require){
    var jQuery=require($global);
