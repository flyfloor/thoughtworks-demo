
var Resource = {
	init: function(value){
		var dom = '<span><a href="javascript:;">'+ value 
									+'<i class="fa fa-times-circle"></i></a></span>';
		return dom;
	},
	create: function(value, spliter){
		var spliter = spliter || ",",
				arr = value.toString().split(spliter)
				elem;
		for(var i in arr){
			elem += this.init(arr[i]);
		}

		return elem;
	}
}

var resMaker = '<div class="res-module">'
							+'<div class="content">'
							+ '<p>separate multiple resources with commas</p>'
							+	'<input id="res_collection" class="field" type="text"/>'
							+ '<input id= "add_btn" type="button" class="btn" value="add"/>'
							+ '<input id= "cancel_btn" type="button" class="btn" value="cancel"/></div></div>'

$(document).ready(function(){

	// add resources module show
	$(".add-resources").click(function(){
		var $item = $(this).parents(".item");
		
		// siblings initial
		$(".res-module").remove();
		$(".add-resources").removeClass("on");

		if ($(this).hasClass("on")){
			$(this).removeClass("on");
		}else{
			$item.append(resMaker);
			$(this).addClass("on");
		}
	})

	//add resources module disappear 
	$(document).click(function(event){

	})

	// remove resources
})
