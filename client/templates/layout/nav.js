const comp = (props) => <nav id='ui-nav' className='flex'>
  <a className='flex flex-1 flex-center' href='/'>
    <span className={props.activeTab == '/' ? 'active' : ''}>CHATS</span>
  </a>
  <a className='flex flex-1 flex-center' href='/channels'>
    <span className={props.activeTab == '/channels' ? 'active' : ''}>GROUPS</span>
  </a>
  <a className='flex flex-1 flex-center' href='/map'>
    <span className={props.activeTab == '/map' ? 'active' : ''}>GAYS</span>
  </a>
  <a className='flex flex-1 flex-center' href='/profile'>
    <span className={props.activeTab == '/profile' ? 'active' : ''}>PROFILE</span>
  </a>
</nav>

export default comp
