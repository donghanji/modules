/*
 * @name Zepto Module
 * @desc 
    Zepto does not support AMD API.
    Zepto Module can let zepto also support AMD API
 */
;(function(global,undefined){
  if(module.declare === undefined){
    
    throw 'There is no global module.declare method!';
  }
  //define zepto.module module
  module.declare('zepto.module',function(require){

  	//Zepto lib