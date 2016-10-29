Messages = new Mongo.Collection('messages')

Messages.before.insert(function (userId, doc) {
  doc = _.extend(doc, {
    userId,
    createdAt: new Date(),
  })
})

Meteor.methods({
  'messages:new'(opt) {
    if (opt.channel) {
      Meteor.users.update(this.userId, {
        $addToSet: {
          channels: opt.channel
        }
      })
    }
    Messages.insert(opt)
  }
})

Meteor.isServer && Meteor.publishTransformed('messages:channels:name', function (name) {
  return Messages.find({ channel: name }, {
    sort: {
      createdAt: 1
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
      { $and: [{ userId: ids[0] }, { toId: ids[1] }] },
      { $and: [{ userId: ids[1] }, { toId: ids[0] }]}
    ]}, {
    sort: {
      createdAt: 1
    }
  }).serverTransform({
    user(message) {
      return Users.findOne(message.userId)
    }
  })
})

Meteor.isServer && Meteor.publishTransformed('messages:my', function () {
  const user = Meteor.users.findOne(this.userId)
  return Messages.find({
    $or: [
      { userId: this.userId },
      { toId: this.userId },
      { channel: {
        $in: user.channels ? user.channels : []
      }}
    ]}, {
    sort: {
      createdAt: -1
    }
  }).serverTransform({
    user(message) {
      return Users.findOne(message.userId, {
        fields: {
          services: false
        }
      })
    },
    to(message) {
      return Users.findOne(message.toId, {
        fields: {
          services: false
        }
      })
    }
  })
})
