Users = Meteor.users

Meteor.isServer && Meteor.publish('users:me', function () {
  return Users.find({ _id: this.userId }, {
    fields: {
      services: false
    }
  })
})

Meteor.isServer && Meteor.publish('users:_id', function (_id) {
  console.log(_id)
  return Users.find({ _id }, {
    fields: {
      services: false
    }
  })
})
