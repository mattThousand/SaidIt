//= require application
//= require_tree .
//= require_self



SaidIt.rootElement = 'body';
SaidIt.setupForTesting();
SaidIt.injectTestHelpers();

// SaidIt.Store=DS.Store.extend({
//     adapter : DS.FixtureAdapter.extend({
//       queryFixtures: function(fixtures, query, type) {
//         console.log(query);
//         console.log(type);
//         return fixtures.filter(function(item) {
//             for(var prop in query) {
//                 if( item[prop] != query[prop]) {
//                     return false;
//                 }
//             }
//             return true;
//         });
//       },
//       simulateRemoteResponse: false
//     })
// });

// var todo = {
//     id: 1,
//     kind: "fans",
//     message: "Respond to trolls",
//     completed_at: null,
//     fans: true,
//     advocate_comments: false,
//     post_comments: false
// };
// var todoArray = [];
// todoArray.push(todo);
// SaidIt.Todo.FIXTURES = todoArray;

function exists(selector) {
  return !!find(selector).length;
}
