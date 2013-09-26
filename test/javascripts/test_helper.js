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

var tweeter = {
  id:64,
  emotion:"joy",
  polarity:"6.25",
  tweets:[
    {id:1005,emotion:"ambiguous",polarity:"5",tweeter_id:64},
    {id:1006,emotion:"ambiguous",polarity:"7.5",tweeter_id:64},
    {id:1007,emotion:"ambiguous",polarity:"7.5",tweeter_id:64},
    {id:1008,emotion:"ambiguous",polarity:"7.5",tweeter_id:64},
    {id:1009,emotion:"ambiguous",polarity:"5",tweeter_id:64},
    {id:1010,emotion:"ambiguous",polarity:"5.0",tweeter_id:64}
  ]
};

var tweeterArray = [];

tweeterArray.push(tweeter);

SaidIt.Tweeter.FIXTURES = tweeterArray;

function exists(selector) {
  return !!find(selector).length;
}
