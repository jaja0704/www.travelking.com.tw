$(function () {
	"use strict";
	$(".unfolded").each(function () {
		var $this = $(this);
		$this.click(function () {
			$this.addClass("out");
		});
	});
});
