window.onload=function(  ){
	var links=document.querySelectorAll('.social-links a');
	for (i=0; i<links.length; i++) {
		links[i].onclick=ClickCount;
	}
	function ClickCount(){
		this.querySelector('span').innerHTML=this.querySelector('span').innerHTML*1 + 1;		
	};
	
	document.querySelector('.what-learn .title').onclick=function(){
		var list=this.parentNode.querySelector("ol");
		if (getComputedStyle(this).cursor==='pointer'){
			if (list.style.display!='inline-block') {
				list.style.display='inline-block';
			} else {
					list.removeAttribute('style');
			};
		};
	};
	
	var Asks=document.querySelectorAll('.question-items li:nth-child(2n+1)');//.onclick=function(){
		
	for (i=0; i<Asks.length; i++) {
		Asks[i].onclick=Answer;
	}
	
	function Answer(){
		var NextEl=this.nextElementSibling
		if (getComputedStyle(this).cursor==='pointer'){
			if (NextEl.style.display!='block') {
				NextEl.style.display='block';
			} else {
				NextEl.removeAttribute('style');
			};
		};;		
	};
		
	var btn=document.querySelector('.img .play-button');
	btn.style.cursor = 'pointer';
	btn.onclick = function(  ){
		this.style.display = 'none';
		this.parentNode.querySelector('.screen-list').style.opacity = 0;
		this.parentNode.style.marginTop = 0;
		var video = this.parentNode.querySelector('.video');
		video.style.opacity = 1;
		video.innerHTML = '<iframe  src="https://www.youtube.com/embed/aDb9hdJ0XDY?autoplay=1" frameborder="0" allowfullscreen></iframe>';
	};
		
	initMenu(document.querySelector('nav'));
	function initMenu(el){
		var span = el.querySelectorAll('span');
		for (i=0; i<span.length; i++){
			span[i].onclick = menuToggle;
		};
	};
	
	document.querySelector('nav').onmouseleave=function(){
		var AllUl=this.querySelectorAll('ul');
			for (i=0; i<AllUl.length; i++){
				AllUl[i].removeAttribute('style');
			};
	}
	
	function menuToggle(){
		if(getComputedStyle(document.querySelector('nav')).position==='relative'){
			var NextEl=this.nextElementSibling
			var CurValue=NextEl.style.display
			var AllUl=this.parentNode.parentNode.querySelectorAll('ul');
			for (i=0; i<AllUl.length; i++){
				AllUl[i].removeAttribute('style');
			};
			if (CurValue!='block') {
				NextEl.style.display='block';
			};	
		};
	};
}