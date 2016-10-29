const data = {
  messages() {
    return Messages.find().fetch()
  }
}

const index = () => <MeteorDataContainer sources={{ data, }} component={({ messages }) => <div>
  {messages.map(message => <p>
    {message.text}
  </p>)}
</div>} />

export default index
