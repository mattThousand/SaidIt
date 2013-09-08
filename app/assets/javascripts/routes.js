SaidIt.Router.reopen({
  location: 'none'
});

SaidIt.ApplicationRoute = Ember.Route.extend({
  model: function() {
    // return SaidIt.Tweeter.find();
  }
});

