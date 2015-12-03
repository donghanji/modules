/*
 * @name jQuery Module
 * @desc
		jQuery from 1.7 began to support AMD API,but under 1.7 version does not support.
		jQuery Module Can let you use any jquery version.
   @notice
		1.by this way,you must open the require mode,like this:
		//code sample
		module.config({
			require:true//open the require mode
		});

		2.less than 1.7 version,you call jquery module,like this:
		//code sample
		var $=require('jquery.module');
		more than 1.7 version,you can like this:
		//code sample
		var $=require('jquery');
		or this:
		//code sample
		var $=require('jquery.module');
 */
(function(global,undefined){
	if(module.declare === undefined){

        return console && console.error && console.error('There is no global module.declare method!');
	}
	//More than 1.7 version support AMD API,Must have the following attributes
	var define=global.define||module.declare||{};
	define.amd={};
	define.amd.jQuery=true;
	//define jquery.module module
	module.declare('jquery.module',function(require,exports){
    //jQuery start
