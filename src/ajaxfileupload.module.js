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
    var $name=module.globals('$');
	module.files({
		'ajaxfileupload':'ajaxfileupload'
	});
    //jquery plugin must been loaded
    module.declare([$name],function(){
        //define ajaxfileupload.module
        module.declare('ajaxfileupload.module',[$name],function(require){
            module.declare(['ajaxfileupload'],function(require){
                
                return jQuery||require('jQuery')||{};
            });
        });
    });
})(window);