SaidIt.showView = Ember.View.extend({
  classNames: ['show'],

  didInsertElement: function(){
    Ember.run.once(this, 'updateData');
  },

  updateData: function() {
    debugger;
    if (this.get('isLoaded')) {
      // render show template
    }
  }
});
