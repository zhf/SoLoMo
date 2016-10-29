Meteor.methods({
  insert,
  update,
  remove,
  empty,
})

function insert(collection, doc) {
  global[collection].insert(doc)
}

function update(collection, docId, doc) {
  global[collection].update(docId, { $set: doc })
}

function remove(collection, docId) {
  global[collection].remove(docId)
}

function empty(collection) {
  global[collection].remove({})
}
