import channelsData from '/channels.json'

_.each([Users, Messages, Channels,], c => {
  c.remove({})
})

const userIds = _.times(20, n => {
  return Meteor.users.insert({
    username: faker.internet.userName(),
    intro: faker.lorem.paragraphs(),
    avatarUrl: faker.internet.avatar(),
  })
})

Accounts.createUser({
  username: 'demo',
  password: 'demo',
  intro: faker.lorem.paragraphs(),
  avatarUrl: faker.internet.avatar(),
})

const channels = _.map(channelsData, channel => {
  Channels.insert({
    name: channel.name,
    logo: channel.logo,
  })

  return channel
})

!Messages.findOne() && _.each(channels, channel => {
  _.times(10, n => {
    Messages.direct.insert({
      text: faker.lorem.sentences(),
      channel: channel.name,
      createdAt: new Date(),
      userId: _.sample(userIds),
    })
  })
})
