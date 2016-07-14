angular.module('catClick', []);
angular.module('catClick').controller('catCtrl',[ '$scope', function ($scope){

var model={
	catList:[],
	
	init: function (){
		var catData=[];
		catData.push({id :'catId1', name:'Mr. Tom', src: "http://lorempixel.com/400/200/cats/1", clickCount:0});
		catData.push({id :'catId2', name:'Mr. Jerry', src: "http://lorempixel.com/400/200/cats/2", clickCount:0});
		catData.push({id :'catId3', name:'Mumbo Jumbo', src: "http://lorempixel.com/400/200/cats/3", clickCount:0});
		catData.push({id :'catId4', name:'Purr', src: "http://lorempixel.com/400/200/cats/4", clickCount:0});
		catData.push({id :'catId5', name:'Kitty Kat', src: "http://lorempixel.com/400/200/cats/5", clickCount:0});
		model.catList=catData;
	}
	
};
$scope.octopus={
	
	getAllCats: function (){
		return model.catList;
	},
	selectCat: function (catId){
		angular.forEach($scope.octopus.getAllCats(), function (catObj,dex){
			if(catObj.id==catId){
				$scope.octopus.selectedCat=catObj;
			}
		});
		
	},
	selectedCat:{},
	catClick: function (catId){
		angular.forEach($scope.octopus.getAllCats(), function (catObj,dex){
				if(catObj.id==catId){
					catObj.clickCount++;
					$scope.octopus.selectCat(catId);
				}
			});
	},
	init: function (){
		model.init();
	}
};

$scope.octopus.init();
/*
$scope.catListView={};

$scope.catPreview ={};


$scope.catList= [ {id :'idImg1', name:'Mr. Tom', src: "http://lorempixel.com/400/200/cats/1", clickCount:0}, {id :'idImg2', name:'Little Jerry', src:"http://lorempixel.com/400/200/cats/2", clickCount:0}, {id :'idImg2', name:'Mumbo Jumbo', src:"http://lorempixel.com/400/200/cats/3", clickCount:0}];
$scope.cat={};

$scope.imageClick= function (cat){
cat.clickCount++;
};

$scope.selectCat=function (cat){
$scope.cat=cat;
}
*/

}]);
