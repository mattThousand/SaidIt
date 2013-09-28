module("/", {
  setup: function() {
    Ember.run(SaidIt, SaidIt.advanceReadiness);
  },
  teardown: function() {
    SaidIt.reset();
  }
});


test("/", function(){
  expect(4);

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
    return fillIn(".handle", "mattthousand").then(function() {
      return click("a.form-submit").then(function() {
        equal(1,1);
      });
    });
  });

});
