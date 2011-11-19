(function(){
	window.GameEvent = Backbone.Model.extend({});
	var GameLog = Backbone.Collection.extend({ model: GameEvent });
	
	window.gameLog = new GameLog();
	
	window.home = new Team({name: 'home'});
	window.guest = new Team({name: 'guest'});
	
	window.v1 = new TeamView({model: home, el: $('#home')});
	window.v2 = new TeamView({model: guest, el: $('#guest')});
	
	window.checkScore = function(){
		if (home.get('point') >= 25 && home.get('point')-guest.get('point') >= 2) {
			alert(home.get('name') + " wins set");
			home.set({set: home.get('set')+1});
		} else if (guest.get('point') >= 25 && guest.get('point')-home.get('point')>=2) {
			alert(guest.get('name') + " wins set");
			guest.set({set: guest.get('set')+1});
		} else {
			return false;
		}
		if(confirm("New set ?")) {
			home.set({ point: 0 });
			guest.set({ point: 0});
		}
	};
	
	window.checkSet = function(){
		if (home.get('set') == 3) alert(home.get('name') + ' wins');
		else if (guest.get('set') == 3) alert (guest.get('name') + ' wins');
		else return false;
	};
	
	v1.render();
	v2.render();
	
	home.bind('change:point', checkScore);
	guest.bind('change:point', checkScore);
	home.bind('change:set', checkSet);
	guest.bind('change:set', checkSet);
})();
