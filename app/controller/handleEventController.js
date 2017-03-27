app.controller("handleEventController",handleEventController);

function handleEventController($scope){
	var technolies = [
		{name: "C#" , likes: 0, dislikes: 0},
		{name: "C++" , likes: 0, dislikes: 0},
		{name: "Pascal" , likes: 0, dislikes: 0},
		{name: "PHP" , likes: 0, dislikes: 0},
	];
	$scope.technolies = technolies; 
	$scope.increaseLike = function(technology){
		technology.likes++;
	}
	$scope.increaseDislike = function(technology){
		technology.dislikes++;
	}
};