/* Scripting for dispalying card Image */
/*
 (function displayControl($scope){
	$scope.noDisplay=function(){
		var x = angular.element( document.querySelector('#cardPic'));
		x.attr('class',"noContent");
		alert(x.attr('class'));
	}();
})();
*/

/* Scripting for side menubar */
$(document).ready(function(){
	  $("#sideMenu").on("hide.bs.collapse", function(){
		  console.log("hide");
	    $("#showMenu").html('Show Menu <span class="glyphicon glyphicon-chevron-down"></span> ');
	  });
	  $("#sideMenu").on("show.bs.collapse", function(){
		  console.log("show");
	    $("#showMenu").html('Hide Menu <span class="glyphicon glyphicon-chevron-up"></span> ');
	  });
});