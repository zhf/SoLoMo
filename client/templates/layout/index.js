import Nav from './nav'

 const layout = ({ content }) => <div className='flex-height'>
  <Nav />
  {content()}
</div>

 export default layout
