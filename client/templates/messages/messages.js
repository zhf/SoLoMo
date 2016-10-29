import Channels from '/collections/channels'

const subscriptions = {
  'messages:channels:name' () {
    return [Meteor.getChannelName()]
  }
}

const data = {

  channel() {
    return Channels.findOne()
  },

  messages() {
    const channel = FlowRouter.current().params.name
    return Messages.find({ channel, }).fetch()
  }

}

const index = () => <MeteorDataContainer sources={{ subscriptions, data, }} component={({ messages }) => <div>
  {messages.map(({ _id, ...message }) => <p key={_id}>
    {message.text}
  </p>)}
</div>} />

export default index
