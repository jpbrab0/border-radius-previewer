$(document).ready(function(){
	$("#border-radius-value-left, #border-radius-value-right, #border-radius-value-right-down, #border-radius-value-left-down").on("input", function(){
		var borderRadiusValueLeft = $("#border-radius-value-left").val()
		var borderRadiusValueRight = $("#border-radius-value-right").val()
		var borderRadiusValueRightDown = $("#border-radius-value-right-down").val()
		var borderRadiusRalueLeftDown = $("#border-radius-value-left-down").val()
		$("#div-border-radius").css('border-radius', `${borderRadiusValueLeft}% ${borderRadiusValueRight}% ${borderRadiusValueRightDown}% ${borderRadiusRalueLeftDown}%`)
		$("#result-border-radius").text(`border-radius:${borderRadiusValueLeft}% ${borderRadiusValueRight}% ${borderRadiusValueRightDown}% ${borderRadiusRalueLeftDown}%`)
	})
})