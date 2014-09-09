
var Resource = {
	init: function(value){
		var dom = '<a href="javascript:;" class="destroy">'+ value 
									+'<i class="fa fa-times-circle"></i></a>';
		return dom;
	},
	create: function(value, spliter){
		var spliter = spliter || ",",
				arr = value.toString().replace(' ', '').split(spliter),
				elem = '';
		for(var i in arr){
			if(!!arr[i]){
				elem += this.init(arr[i]);
			}
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
	$(document).on("click", ".destroy",function(){
		// ajax handler
		$(this).remove();
	})

	// add resources
	$(document).on("click", "#add_btn",function(){
		var $token = $("#res_collection");
		if (!!$token.val()) {
			dom = Resource.create($token.val(), ",");
			$(this).parents(".item").find(".resources").append($(dom));
		}
		$token.val('');
	})

	function closeModule(){
		
	}
})
