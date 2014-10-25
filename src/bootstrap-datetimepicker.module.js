/*
 * @name bootstrap-datetimepicker module
 * @desc 
		
   @notice
		
 */
(function(global,undefined){
	if(module.declare === undefined){
		throw 'There is no global module.declare method!';
	}
    //globals $ object
    var $name=module.globals('$');
	
    //must be loaded dependencies
	module.declare([$name],function(require){
		//define bootstrap-datetimepicker.module module
        module.declare(['datetimepicker'],function(){
            module.declare('bootstrap-datetimepicker.module',['datetimepicker.lan'],function(require){
                
                return require($name);
            });
        });
	});
})(window);