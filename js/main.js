var ViewModel = function (){

this.catName=ko.observable('Mr. Jerry');
this.catSrc=ko.observable('http://lorempixel.com/400/200/cats/1');
this.clickCount=ko.observable(0);
this.increment= function (){
	this.clickCount(this.clickCount()+1);
	if(this.clickCount()==5){
		this.level('sitter');
	}else if(this.clickCount()==10){
		this.level('toddler');
	}else if(this.clickCount()==15){
		this.level('teen');
	}
};
this.level= ko.observable('newborn');

this.catTitle= ko.computed(function (){
	return this.catName()+' '+this.clickCount();
}, this);

this.nickNames= ko.observableArray(['Mr. Tom', 'Black Cat', 'Jumbo']);
}
ko.applyBindings(new ViewModel());