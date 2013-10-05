module("/", {
  setup: function() {
    Ember.run(SaidIt, SaidIt.advanceReadiness);
  },
  teardown: function() {
    SaidIt.reset();
  }
});

test("Initial redirect", function(){
  expect(1);

  visit("/").then(function(){
    equal(path(), "tweeters.new", "Redirects to /tweeters/new");
  });

});

test("tweeters/new", function(){
  expect(5);

  visit("/").then(function() {
    ok(exists("form"), "New tweeter form is present");
  });

  visit("/").then(function() {
    equal(find("a.form-submit").length, 1, "Form submit link is present");
  });

  visit("/").then(function() {
    equal(find(".handle").length, 1, "Form has a field for twitter handle");
  });

  visit("/").then(function() {
    equal(find("a#how-it-works-btn").length, 1, "There is a 'how it works' button");
  });

  visit("/").then(function() {
    return click("a#how-it-works-btn").then(function(){
      equal(find("h6").text(), "Enter any existing twitter handle to get a breakdown of their 20 most recent tweets by expressed emotion. Go ahead... try it...", 
        "'how it works' text displays when 'how it works' button is clicked");
    });
  });

});


test("form submission", function() {
  expect(2)

  visit("/").then(function() {
    return fillIn(".handle", "mattthousand").then(function() {
      return click("a.form-submit").then(function() {
        equal(path(), "tweeters.show", "Redirects to tweeters/show");
        equal(find("#tweeter_loading_bar").length, 1, "Loading template is rendered");
      });
    });
  });

});