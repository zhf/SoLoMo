const subscriptions = {
  'channels:all': []
}

const data = {
  channels() {
    return Channels.find().fetch()
  },
}

const index = () => <MeteorDataContainer sources={{ subscriptions, data, }} component={({ channels }) => <div>
  {channels.map(({ _id, name, ...channel }) => <a key={_id} href={`/channels/${name}`}>
    {name}
  </a>)}
</div>} />

export default index
