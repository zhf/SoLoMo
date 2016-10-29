const subscriptions = {
  'messages:my': []
}

const data = {
  messages() {
    const messages = Messages.find({}, {
      sort: {
        createdAt: -1
      }
    }).fetch()

    console.log(messages)

    return _.uniqBy(messages, 'channel')
  }
}

const index = () => <MeteorDataContainer sources={{ subscriptions, data, }} component={({ messages }) => <div className='flex flex-column'>
  {messages.map(({ ...message }) => <div key={message._id} className='flex flex-center-y pdlr ui-list ui-pointer' onClick={() => whichView(message)}>
    [{message.channel || message.user.username}]： {message.text}
  </div>)}
</div>} />

function whichView(message) {
  return message.channel ? FlowRouter.go(`/channels/${message.channel}`) : FlowRouter.go(`/users/${message.to}/messages`)
}

export default index
