Messages = new Mongo.Collection('messages')

Meteor.isServer && Meteor.publish('messages:channels:name', function (name) {
  return Messages.find({ channel: name }, {
    sort: {
      createdAt: -1
    }
  })
})
