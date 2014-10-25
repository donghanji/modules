/*
 * @name highcharts Module
    
 * @desc 
		highcharts as a module.
        
        to see:
            
   
 */
(function(global,undefined){
	if(module.declare === undefined){
		
        throw 'There is no global module.declare method!';
	}
    var $name=module.globals('$');
	module.files({
		'highcharts':'highcharts'
	});
    //jquery plugin must been loaded
    module.declare([$name],function(){
        //define highcharts.module 
        module.declare('highcharts.module',[$name,'highcharts'],function(require){
            
            return jQuery||require('jQuery')||{};
        });
    });
})(window);