import Channels from '/collections/channels'

import Hook from '/react-hook'

const subscriptions = {
  'messages:channels:name' () {
    return [Meteor.getChannelName()]
  }
}

const data = {

  channel() {
    return Channels.findOne({
      name: FlowRouter.current().params.name
    })
  },

  channelName() {
    return FlowRouter.current().params.name
  },

  messages() {
    const channel = FlowRouter.current().params.name
    return Messages.find({ channel, }).map(message => ({
      user: message.user ? message.user : Meteor.users.findOne(message.userId),
      ...message,
    }))
  }

}

const index = () => <MeteorDataContainer sources={{ subscriptions, data, }} component={({ messages, channelName }) => <div className='flex flex-column'>
  <div id='ui-messages' className='flex flex-column flex-1'>
    {messages.map(({ _id, user, ...message }) => <div key={_id}>
      <div>
        <img src={user.avatarUrl} className='ui-img-circle ui-avatar' />
        <span>{user.username}</span>
      </div>
      <div>{message.text}</div>
    </div>)}
  </div>
  <Hook didMount={scrollToBottom} didUpdate={scrollToBottom} />
</div>} />

function scrollToBottom() {
  $('#ui-main').scrollTop(999999)
}

export default index
