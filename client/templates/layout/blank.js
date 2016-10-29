 const layout = ({ content, userId }) => !userId ? <div className='flex flex-height flex-column'>
  <div className='flex-1 flex-scroll'>
    {content()}
  </div>
</div> : <a onClick={() => Meteor.logout()}>注销</a>

function tracker(props, onData) {
  const loaded = Meteor.subscribe('users:me').ready()
  const userId = Meteor.userId()
  loaded && onData(null, { userId })
}

 export default Container(tracker)(layout)
