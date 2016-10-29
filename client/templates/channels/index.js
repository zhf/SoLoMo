const data = {
  channels() {
    return Channels.find().fetch()
  },
}

const index = () => <MeteorDataContainer sources={{ data }} component={({ channels }) => <div>
  {channels.map(channel => <div>
    {channel.name}
  </div>)}
</div>} />

export default index
