(function() {
		//controller function
		var myController = function($scope, $http) {
			  $http.get("data/data.json")
			  .success(function (response) {
				  $scope.data = response;
			});
	/*$scope.DragAndDropOptions = {
	
				    //restrict move across columns. move only within column.
				    //accept: function (sourceItemHandleScope, destSortableScope) {
				    // return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
				    // },
	itemMoved: function (event) {
		event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column;
	},
	orderChanged: function (event) {
	}
	};*/			  
	$scope.addCard=function(index)
	{	
		$scope.index=index;
	}
	
	$scope.getCardIndex=function($event,index)
	{		alert("hi");
		$scope.cardIndex=index;
	}
	
	$scope.getPanelIndex=function($event)
	{	console.log("Hi");
		//$scope.panelIndex=index;
	}
	
	$scope.insert=function(index)
	{
	
	$scope.targetPanel=index;

	
	
	
	for(var i=0;i<$scope.data.board[$scope.targetPanel].panel.length;i++)
		{
		
		if($scope.data.board[$scope.panelIndex].panel[$scope.cardIndex].card.text==$scope.data.board[$scope.targetPanel].panel[i].card.text)
			{
			$scope.newCardPosition=i;
			break;
			}
		
		}
	console.log($scope.newCardPosition);
	
	
	$http.put("/update/"+$scope.cardIndex+"/"+$scope.panelIndex+"/"+$scope.targetPanel+"/"+$scope.newCardPosition,function(r,s,x){
		
		
	});
	
	
	}
	
	
	
	
	
	$scope.save=function(newCardName,imageDisplay)
	{
		console.log($scope.index);
		console.log(newCardName);
		console.log(imageDisplay);
		
	
		var card={
				"card": {
					"labelColor1": "red",
					"labelColor2": "",
					"labelColor3": "",
					"labelColor4": "",
					"labelColor5": "",
					"text": "",
					"pic": "",
					"glyphalignLeft": "",
					"glyphcomment": "",
					"glyphpaperclip": "",
					"glyphlist": "",
					"glyphlike": "",
					"glyphtime": "",
					"comments": "",
					"attachments": "",
					"vote": "",
					"list": "",
					"userPic1": "",
					"userPic2": "",
					"dateId": "",
					"date": ""
				}
			};
		
		card.card.text=newCardName;
		card.card.pic=imageDisplay;
		$scope.data.board[$scope.index].panel.push(card);
		var newCard=JSON.stringify(card);
		$http.put("http://localhost:9090/addCard/"+$scope.index+"/"+newCard,function(r,s,x){
		
		
		});
		
		
	}
			  
		};
		//adding your function as controller
		//first parameter is controller name and second parameter is function name
		angular.module('myApp').controller('myController',myController);	
	}()//self invoking automatically adds controller to your app
);