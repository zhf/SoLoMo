 const layout = ({ content }) => <div>
  {content()}
  <nav>
    <a href="/">messages</a>
    <a href="/channels">channels</a>
    <a href="/map">map</a>
  </nav>
</div>

 export default layout
