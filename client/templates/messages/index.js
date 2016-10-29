const data = {
  messages() {
    return Messages.find().fetch()
  }
}

const index = () => <MeteorDataContainer sources={{ data, }} component={({ messages }) => <div>
  {messages.map(({ _id, ...message }) => <p key={_id}>
    {message.text}
  </p>)}
</div>} />

export default index
