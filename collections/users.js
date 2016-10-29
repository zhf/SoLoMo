Users = Meteor.users

Meteor.isServer && Meteor.publish('users:me', function () {
  return Users.find({ _id: this.userId }, {
    fields: {
      services: false
    }
  })
})
