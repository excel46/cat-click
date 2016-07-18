var Cat= function (){
this.catName=ko.observable('Mr. Jerry');
this.catSrc=ko.observable('http://lorempixel.com/400/200/cats/1');
this.clickCount=ko.observable(0);
this.level= ko.computed(function (){
	var level;
	if(this.clickCount()<5){
		level= 'newborn';
	}else if(this.clickCount()<10){
		level='sitter';
	}else if(this.clickCount()<15){
		level='toddler';
	}else{
		level='teen';
	}
	return level;
	
},this);

this.catTitle= ko.computed(function (){
	return this.catName()+' '+this.clickCount();
}, this);

this.nickNames= ko.observableArray(['Mr. Tom', 'Black Cat', 'Jumbo']);
}

var ViewModel = function (){

this.currentCat= ko.observable(new Cat());
this.increment= function (){
	this.currentCat().clickCount(this.currentCat().clickCount()+1);
	
};

}
ko.applyBindings(new ViewModel());