app.controller("nestedRepeatController",nestedRepeatController);

function nestedRepeatController($scope){
	var countries = [
		{
			name: "UK",
			cities: [
				{
					name: "LonDon",
					name: "Manchester",
					name: "Liverpool",
				}
			],
		},

		{
			name: "US",
			cities: [
				{
					name: "Los Angeles",
					name: "Chicago",
					name: "Washiton DC",
				}
			],
		},

		{
			name: "Chine",
			cities: [
				{
					name: "Bac Kinh",
					name: "Thuong Hai",
					name: "Quang Chau",
				}
			],
		}
	];
	$scope.countries = countries; 
};