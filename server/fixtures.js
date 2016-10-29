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

!Messages.findOne() && _.times(200, n => {
  Messages.insert({
    text: faker.lorem.sentences(),
    channel: _.sample(defaultChannels),
    createdAt: new Date(),
  })
})

!Channels.findOne() && _.each(defaultChannels, channel => {
  Channels.insert({
    name: channel,
  })
})

!Users.findOne() && Accounts.createUser({
  username: 'demo',
  password: 'demo',
})
