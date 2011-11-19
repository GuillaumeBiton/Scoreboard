(function(){
	window.GameEvent = Backbone.Model.extend({});
	var GameLog = Backbone.Collection.extend({ model: GameEvent });
	
	window.gameLog = new GameLog();
	
	window.home = new Team({name: 'home'});
	window.guest = new Team({name: 'guest'});
	
	window.v1 = new TeamView({model: home, el: $('#home')});
	window.v2 = new TeamView({model: guest, el: $('#guest')});
	
	var logView = Backbone.View.extend({
		el: $('#log'),
		
	});
	
	v1.render();
	v2.render();
})();
