(function() {
	window.onload=function(){
		
		var back=document.getElementsByClassName('back')[0];
			back.addEventListener('click',function(){
				window.history.back();
			},false);
	}
	
})();