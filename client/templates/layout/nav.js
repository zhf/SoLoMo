const comp = () => <nav id='ui-nav' className='flex'>
  <a className='flex flex-1 flex-center' href='/'>
    <span><i className='fa fa-2x fa-comments-o'></i></span>
  </a>
  <a className='flex flex-1 flex-center' href='/channels'>
    <span><i className='fa fa-2x fa-list'></i></span>
  </a>
  <a className='flex flex-1 flex-center' href='/map'>
    <span><i className='fa fa-2x fa-map-marker'></i></span>
  </a>
  <a className='flex flex-1 flex-center' href='/profile'>
    <span><i className='fa fa-2x fa-user'></i></span>
  </a>
</nav>

export default comp
