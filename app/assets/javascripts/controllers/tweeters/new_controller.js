SaidIt.TweetersNewController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var _this = this;
      return this.content.save().then(function() {
        return _this.transitionToRoute('tweeters.show', _this.content);
      });
    }
  }
});
