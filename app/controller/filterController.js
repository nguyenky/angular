app.controller("filterController",filterController);

function filterController($scope){
	var employee = [
	{name:"Naruto", birthDate: new Date('12/3/1989'),skill: 400000,status:false},
	{name:"Sasuke", birthDate: new Date('12/4/1989'),skill:" Sharingan",status:true},
	{name:"kakashi", birthDate: new Date('12/5/1989'),skill:"Chidori",status:true},
	{name:"Sakura", birthDate: new Date('12/6/1989'),skill:"Giang long thap bat chuong",status:true},
	{name:"Sai", birthDate: new Date('12/6/1989'),skill:"Hoa bi",status:false},
	];
	$scope.employee = employee;
	$scope.limitRow = 10;
};
 app.filter('status',function(){
 	return function (input){
 		if(input == false){
 			return "Kichs hoat";
 		}
 		else{
 			return "Khoas";
 		}
 	}
 });