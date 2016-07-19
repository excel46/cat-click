var initialList=[
		{id :'catId1', name:'Mr. Tom', src: "http://lorempixel.com/400/200/cats/1", clickCount:0, nicknames:['Mr. Tom', 'Black Cat', 'Jumbo']},
		{id :'catId2', name:'Mr. Jerry', src: "http://lorempixel.com/400/200/cats/2", clickCount:0,nicknames:['Jerry J']},
		{id :'catId3', name:'Mumbo Jumbo', src: "http://lorempixel.com/400/200/cats/3", clickCount:0, nicknames:['Big guy']},
		{id :'catId4', name:'Purr', src: "http://lorempixel.com/400/200/cats/4", clickCount:0, nicknames:['Billo']},
		{id :'catId5', name:'Kitty Kat', src: "http://lorempixel.com/400/200/cats/5", clickCount:0, nicknames:['Kate']}
		];
var Cat= function (data){
this.catName=ko.observable(data.name);
this.catSrc=ko.observable(data.src);
this.clickCount=ko.observable(data.clickCount);
this.nicknames= ko.observableArray(data.nicknames);

this.level= ko.computed(function (){
	var level;
	var clicks=this.clickCount();
	if(clicks<5){
		level= 'newborn';
	}else if(clicks<10){
		level='sitter';
	}else if(clicks<15){
		level='toddler';
	}else{
		level='teen';
	}
	return level;
	
},this);

this.catTitle= ko.computed(function (){
	return this.catName()+' '+this.clickCount();
}, this);


}

var ViewModel = function (){
var self=this;
this.catList=ko.observableArray([]);
initialList.forEach(function (cat){
	self.catList().push(new Cat(cat));
});
this.currentCat= ko.observable(self.catList()[0]);

this.selectCat=function (){
	//console.log(index);
	self.currentCat(this);
}
this.increment= function (){
	self.currentCat().clickCount(self.currentCat().clickCount()+1);
	
};

}
ko.applyBindings(new ViewModel());