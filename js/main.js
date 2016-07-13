angular.module('catClick', []);
angular.module('catClick').controller('catCtrl',[ '$scope', function ($scope){

$scope.catList= [ {id :'idImg1', name:'cat1', src: "http://lorempixel.com/400/200/cats/1", clickCount:0}, {id :'idImg2', name:'cat2', src:"http://lorempixel.com/400/200/cats/2", clickCount:0}];
$scope.cat={};

$scope.imageClick= function (cat){
cat.clickCount++;
};

$scope.selectCat=function (cat){
$scope.cat=cat;
}

}]);
