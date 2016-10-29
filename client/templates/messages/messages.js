import Channels from '/collections/channels'

const data = {

  channel() {
    console.log(FlowRouter.current())
    return Channels.findOne()
  },

  messages() {
    const channel = FlowRouter.current().params.name
    return Messages.find({ channel, }).fetch()
  }

}

const index = () => <MeteorDataContainer sources={{ data, }} component={({ messages }) => <div>
  {messages.map(({ _id, ...message }) => <p key={_id}>
    {message.text}
  </p>)}
</div>} />

export default index
