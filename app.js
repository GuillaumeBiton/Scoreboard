(function(){
	window.home = new Team({name: 'home'});
	window.guest = new Team({name: 'guest'});
	
	window.v1 = new TeamView({model: home, el: $('#home')});
	window.v2 = new TeamView({model: guest, el: $('#guest')});
	
	v1.render();
	v2.render();
})();
