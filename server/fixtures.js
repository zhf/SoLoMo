const defaultChannels = [
  'javascript',
  'es6',
  'node',
  'meteor',
  'react',
]

!Channels.findOne() && _.each(defaultChannels, channel => {
  Channels.insert({
    name: channel,
  })
})
