$(function() {
	//点击回到顶部
	$(".backTop img").click(function() {
		$("html,body").animate({
			"scrollTop": "0"
		}, "normal");
	});
	//点击变色
	$(".menu .item span").click(function() {
		$(this).addClass("color");
		$(this).parents(".item").siblings().find("span").removeClass("color");
	});
	$(".change .type span").click(function() {
		$(this).addClass("color");
		$(this).parents(".type").siblings().find("span").removeClass("color");
	});
	//选项卡
	$(".change .type").click(function() {
		var idx = $(this).index();
		$(".select>.products").eq(idx).removeClass("selectedCard");
		$(".select>.products").eq(idx).siblings().addClass("selectedCard");
	});
});
