var ajsl = {
	layers:[],
	addLayer:function(){
		var layer = [];
		for (var i in arguments){
			var arg = arguments[i];
			if (typeof arg === "string"){
				layer.push(arg);
			}
			else if (arg instanceof Array){
				for (var j in arg){
					if (typeof arg[j] === "string"){
						layer.push(arg[j]);
					}
				}
			}
		}
		this.layers.push(layer);
	},
	load:function(i){
		var self = this;
		if ((typeof i !== "number")){
			i = 0;
		}
		if (this.layers[i] !== undefined){
			this.loadLayer(this.layers[i], function(){
				self.load(i + 1);
			});
		}
	},
	loadLayer:function(layer, done){
		var count = 0;
		for (var i in layer){
			var element = document.createElement("script");
			element.src = layer[i];
			document.body.appendChild(element);
			element.addEventListener('load', function(){
				count = count + 1;
				if (count == layer.length && done !== undefined)
					done();
			});
		}
	}
}
