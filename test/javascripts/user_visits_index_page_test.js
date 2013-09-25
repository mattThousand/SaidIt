module("/", {
  setup: function() {
    Ember.run(SaidIt, SaidIt.advanceReadiness);
  },
  teardown: function() {
    SaidIt.reset();
  }
});


test("/", function(){
  expect(2);

  visit("/").then(function() {
    ok(exists("form"), "New tweeter form is present");
  });

  visit("/").then(function() {
    equal(find("a.form-submit").length, 1, "Form submit link is present");
  });

  // visit("/").then(function() {
  //   return fillIn("handleField", "mattthousand").then(function() {
  //     return click("a.form-submit").then(function() {
  //       debugger;
  //     });
  //   });
  // });

});
