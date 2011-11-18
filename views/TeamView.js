var TeamView = Backbone.View.extend({
	tagName: "div",
	
	template: _.template("<div id='name' class='name'><%= name %></div><div id='score 'class='score'><%= point %></div>"),
	
	events: {
		"click .score": "score",
		"click .name": "changeName"
	},
	
	initialize: function(){
		_.bindAll(this, "render");
		this.model.bind("change", this.render);
	},
	
	render: function(){
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	},
	
	score: function(){
		this.model.set({ point: this.model.get('point')+1});
		var event = new GameEvent({'team': this.model.get('name'), 'event': 'score', 'args' : 1});
		gameLog.add(event);
	},
	
	changeName: function(){
		var name = prompt('Change team name :', this.model.get('name'));
		if(!name) name = this.model.get('name');
		this.model.set({name: name});
	}
});
