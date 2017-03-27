app.controller("demoController",demoController);

function demoController($scope){
	var employee = [
		{ firstName: 'Uzumaki', lastName: 'Naruto', gender: 'Male', skill:'La Tuan Hoan' },
		{ firstName: 'Uchiha', lastName: 'Itachi', gender: 'Male', skill:'Sharingan' },
		{ firstName: 'Nara', lastName: 'Shikamaru', gender: 'Male', skill:'Di anh' },
		{ firstName: 'Aburame', lastName: 'Shino', gender: 'Male', skill:'Trung' },
		{ firstName: 'Hatake', lastName: 'Kakashi', gender: 'Male', skill:'Chidori' }
	];
	$scope.employee = employee; 
};