const subscriptions = {
  'channels:all': []
}

const data = {
  channels() {
    return Channels.find().fetch()
  },
}

const index = () => <MeteorDataContainer sources={{ subscriptions, data, }} component={({ channels }) => <div className='channel-list flex flex-column'>
  {channels.map(({ _id, name, logo, ...channel }) => <a key={_id} className='flex flex-center-y pdlr list' href={`/channels/${name}`}>
    <div className="channel">
      <img src={`/logos/${logo}`} />
      {name}
      <span className="FIXME">Members</span>
    </div>
  </a>)}
</div>} />

export default index
