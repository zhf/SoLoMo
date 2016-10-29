const subscriptions = {
  'channels:all': []
}

const data = {
  channels() {
    return Channels.find().fetch()
  },
}

const index = () => <MeteorDataContainer sources={{ subscriptions, data, }} component={({ channels }) => <div className='flex flex-column'>
  {channels.map(({ _id, name, ...channel }) => <a key={_id} className='flex flex-center-y pdlr list' href={`/channels/${name}`}>
    {name}
  </a>)}
</div>} />

export default index
