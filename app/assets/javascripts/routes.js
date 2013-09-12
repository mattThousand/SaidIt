SaidIt.Router.reopen({
  rootURL: '/'
});


SaidIt.ApplicationRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('tweeter', params.tweeter_id);
  }
});
