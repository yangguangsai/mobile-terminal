$(function() {
	$(".floor1-lft li>span").click(function() {
		$(this).addClass("change");
		$(this).parent().siblings().find("span").removeClass("change");
	});
	$(".floor1-lft li").click(function() {
		var idx = $(this).index();
		$(".floor1-rgt>.product").eq(idx).removeClass("selectCard");
		$(".floor1-rgt>.product").eq(idx).siblings().addClass("selectCard");
	});
});
