Posts = new Mongo.Collection('posts')

Todos = new Mongo.Collection('todos')

Meteor.isServer && Meteor.publish('posts', function () {
  Meteor._sleepForMs(2000)
  return Posts.find()
})

Meteor.isServer && Meteor.publish('todos', function () {
  Meteor._sleepForMs(2000)
  return Todos.find()
})

if (Meteor.isServer) {
  Posts.remove({})
  Todos.remove({})
}

Meteor.isServer && !Posts.findOne() && _.times(2000, n => {
  Posts.insert({
    title: faker.lorem.sentence(),
  })
})

Meteor.isServer && !Todos.findOne() && _.times(2000, n => {
  Todos.insert({
    title: faker.lorem.sentence(),
  })
})
