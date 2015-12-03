(function(){
	module.config({
		require:false,//open global require method,default false
		base:'dist/',
		nocache:false,//['name','name']|'t=xx'|true|false,default false
		mined:'',//min suffix,like 'min',default ''
		alias:{

		},
		files:[],//not a module,only a file
		globals:{
      '$':'jquery.module'
    },
		defaults:{},
		debug:false
	});
})();
