$(function () {
    setTimeout(function () {
        $('.name').animate({
            opacity:"1",
            top:"15%"
        },2000);

    },6000);
    setTimeout(function () {
        $('.happy').animate({
            opacity:"1",
            top:"15%"
        },2000);

    },6000);
    setTimeout(function () {
        $('.like').animate({
            opacity:"1",
            top:"55%"
        },2000);

    },7500);
    setTimeout(function () {
        $('.button-style1').animate({
            opacity:"1",
            top:"70%"
        },1500);
        $('.button-style2').animate({
            opacity:"1",
            top:"85%"
        },2000);
    },9000);
	// $(window).click(function(){
	// 	$('audio')[0].play();
	// });
	// window.audio=$('audio')[0].play();
})
$('#dislike').click(function (event) {
	alert("不，必须喜欢.");
});