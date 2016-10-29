Messages = new Mongo.Collection('messages')

Messages.before.insert(function (userId, doc) {
  doc = _.extend(doc, {
    userId,
    createdAt: new Date(),
  })
})

Meteor.methods({
  'messages:new'(opt) {
    Messages.insert(opt)
  }
})

Meteor.isServer && Meteor.publishTransformed('messages:channels:name', function (name) {
  return Messages.find({ channel: name }, {
    sort: {
      createdAt: -1
    }
  }).serverTransform({
    user(message) {
      return Users.findOne(message.userId)
    }
  })
})
