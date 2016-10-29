Channels = new Mongo.Collection('channels')

Meteor.isServer && Meteor.publish('channels:all', function () {
  return Channels.find()
})

export default Channels
