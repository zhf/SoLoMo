import Nav from './nav'

import Sender from '../messages/sender'

import Login from '../login'

 const layout = ({ content, userId }) => userId ? <div className='flex flex-height flex-column'>
  <Nav />
  <div className='flex-1'>
    {content()}
  </div>
  <Sender />
</div> : <Login />

function tracker(props, onData) {
  const loaded = Meteor.subscribe('users:me').ready()
  const userId = Meteor.userId()
  loaded && onData(null, { userId })
}

 export default Container(tracker)(layout)
