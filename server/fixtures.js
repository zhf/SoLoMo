import channels from '/channels.json'

console.log(channels)

// FIXME import default channels from `../channels.json`
const defaultChannels = [
  'general',
  'random',
  'javascript',
  'es6',
  'node',
  'meteor',
  'react',
]

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

!Messages.findOne() && _.times(200, n => {
  Messages.direct.insert({
    text: faker.lorem.sentences(),
    channel: _.sample(defaultChannels),
    createdAt: new Date(),
    userId: _.sample(userIds),
  })
})

!Channels.findOne() && _.each(channels, channel => {
  Channels.insert({
    name: channel.name,
    logo: channel.logo,
  })
})
