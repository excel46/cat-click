angular.module('catClick', []);
angular.module('catClick').controller('catCtrl',[ '$scope', function ($scope){

var model={
	currentCat: null,
	catList:[
		{id :'catId1', name:'Mr. Tom', src: "http://lorempixel.com/400/200/cats/1", clickCount:0},
		{id :'catId2', name:'Mr. Jerry', src: "http://lorempixel.com/400/200/cats/2", clickCount:0},
		{id :'catId3', name:'Mumbo Jumbo', src: "http://lorempixel.com/400/200/cats/3", clickCount:0},
		{id :'catId4', name:'Purr', src: "http://lorempixel.com/400/200/cats/4", clickCount:0},
		{id :'catId5', name:'Kitty Kat', src: "http://lorempixel.com/400/200/cats/5", clickCount:0}
		]
	
	
};
$scope.octopus={
	
	getAllCats: function (){
		return model.catList;
	},
	selectCat: function (cat){
			$scope.octopus.selectedCat=cat;
		
	},
	selectedCat: model.currentCat,
	catClick: function (){
		$scope.octopus.selectedCat.clickCount++;
	},
	init: function (){
		$scope.octopus.selectedCat=model.catList[0];
	}
};

$scope.octopus.init();


}]);
