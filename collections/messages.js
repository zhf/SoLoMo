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

Meteor.isServer && Meteor.publishTransformed('messages:users:conversation', function (ids) {
  return Messages.find({
    $or: [
      { $and: [{ userId: ids[1] }, { to: ids[1] }] },
      { $and: [{ userId: ids[0] }, { to: ids[0] }]}
    ]}, {
    sort: {
      createdAt: -1
    }
  }).serverTransform({
    user(message) {
      return Users.findOne(message.userId)
    }
  })
})

Meteor.isServer && Meteor.publishTransformed('messages:my', function () {
  return Messages.find({
    $or: [{ userId: this.userId }, { to: this.userId }]}, {
    sort: {
      createdAt: -1
    }
  }).serverTransform({
    user(message) {
      return Users.findOne(message.userId)
    }
  })
})
