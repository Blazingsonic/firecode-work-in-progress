
$('.main-heading').sticky();

$('.main-heading').on('sticky-start', function () {
  	$(this).css({
    	fontSize:  '2rem',
    	background: '#ffa949',
    	marginTop: '0',
    	borderBottom: '3px solid black'
  	});
});

$('.main-heading').on('sticky-end', function () {
  	$(this).css({
    	fontSize:  '5.625rem',
    	background: 'transparent',
    	border: 'none'
  	});
});

console.log('This was a live reload!');

$.get("img/svg/svg.svg", function(data) {
  	var div = document.createElement('div');
  	div.className += 'hide-svg-defs';
  	div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
	document.body.insertBefore(div, document.body.childNodes[0]);
});

$(document).ready(function() {
	$('.show-grid-button').on('click', function() {
		$('.gridlover-grid').toggle();
	});
});