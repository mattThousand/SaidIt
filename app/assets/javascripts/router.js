SaidIt.Router.reopen({
  rootURL: '/',
  location: 'history'
});

SaidIt.Router.map(function() {
  this.resource('tweeters', function() {
    this.route('new');
    this.route('show', { path: '/:tweeter_id'});
    this.resource('tweet', {
      path: '/tweet/:tweet_id'
    });
  });
});

