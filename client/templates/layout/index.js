import Nav from './nav'

import Login from '../login'

 const layout = ({ content, userId }) => userId ? <div className='flex flex-height flex-column'>
  <Nav activeTab={location.path}/>
  <div className='flex-1 flex-scroll'>
    {content()}
  </div>
</div> : <Login />

function tracker(props, onData) {
  const loaded = Meteor.subscribe('users:me').ready()
  const userId = Meteor.userId()
  loaded && onData(null, { userId })
}

 export default Container(tracker)(layout)
