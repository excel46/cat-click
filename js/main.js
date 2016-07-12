$(function(){
var clickCount=0;
$('#catImgId').click(function (e){
	clickCount++;
	updateView();
});
function updateView(){
$('#idCount').text(clickCount);
}

updateView();
});