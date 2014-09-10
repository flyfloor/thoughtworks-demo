// Resource
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



// resource module dom
var resMaker = '<div class="res-module">'
							+'<div class="content">'
							+ '<p>(separate multiple resources with commas)</p>'
							+	'<input id="res_collection" class="field" type="text"/>'
							+ '<input id= "add_btn" type="button" class="btn" value="add"/>'
							+ '<input id= "cancel_btn" type="button" class="btn" value="cancel"/></div></div>'


var closeModule = function(){
	$(".res-module").remove();
}


$(document).ready(function(){

	// resources module show
	$(".add-resources").click(function(){
		var $item = $(this).parents(".item");		
		// siblings initial
		closeModule();
		$(".add-resources").removeClass("on");
		
		if (!$(this).hasClass("on")) {
			$item.append(resMaker);
		}
		$(this).toggleClass("on");

	})

	//resources module disappear 
	$(document).click(function(event){
		var $target = $(event.target);

		if ($target.is(".res-module") || $target.is(".add-resources") 
			|| $target.parents(".res-module").length > 0) {
			event.stopPropagation();
			return false;
		}else{
			closeModule();
		}
	})

	// add resources
	$(document).on("click", "#add_btn",function(){
		var $token = $("#res_collection");

		if (!!$token.val()) {
			// when ajax happend here

			dom = Resource.create($token.val(), ",");
			$(this).parents(".item").find(".resources").append($(dom));
			$token.val('');

			closeModule();
		}
	})

	// remove resources
	$(document).on("click", ".destroy",function(){
		// when ajax happend here...
		$(this).remove();
	})

	// cancle btn handler
	$(document).on("click", "#cancel_btn", function(){
		closeModule();
	})

})
