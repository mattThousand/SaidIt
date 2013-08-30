// DS.RESTAdapter.reopen({
//   namespace: 'partner_admin'
// });
// DS.RESTAdapter.configure("plurals", {
//   todo: "to_dos"
// });
SaidIt.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.RESTAdapter.create({
  })
});
