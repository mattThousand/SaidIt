module("/show", {
	setup: function() {
		Ember.run(SaidIt, SaidIt.advanceReadiness);
	},
	teardown: function() {
		SaidIt.reset();
	}
});
