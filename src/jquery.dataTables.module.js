/*
 * @name jquery.dataTables module
 * @desc 
		
   @notice
		
 */
(function(global,undefined){
	if(module.declare === undefined){
		throw 'There is no global module.declare method!';
	}
    //globals $ object
    var $name=module.globals('$');
	module.files({
		'jquery.dataTables':'jquery.dataTables'
	});
    //must be loaded dependencies
	module.declare([$name],function(require){
        //for jquery.mousewheel
        define.amd=false;
		//define jquery.mousewheel.module
        module.declare('jquery.dataTables.module',['jquery.dataTables'],function(require){
            
            return require($name);
        });
	});
})(window);