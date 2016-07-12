$(function(){
var clickCount=0;
var images = [ {id :'idImg1', name:'cat1', src: "http://lorempixel.com/400/200/cats/1", clickCount:0}, {id :'idImg2', name:'cat2', src:"http://lorempixel.com/400/200/cats/2", clickCount:0}];

var parentDiv= $('#idImageDiv');
$(images).each(function (dex,item){
	var imgDiv= $('<div>');
	imgDiv.append($('<img>').attr('src', item.src).attr('id',dex));
	imgDiv.append($('<div>').text('Cat name: '+item.name));
	imgDiv.append($('<span>').text('Cat click count: '+item.clickCount));
	//imgDiv.append('</div>');
	imgDiv.appendTo(parentDiv);
});
$('img').click(function (e){
	//images[this.attr('id')].clickCount++;
	clickCount++;
	updateView();
});
function updateView(){
$('#idCount').text(clickCount);
}

updateView();
});