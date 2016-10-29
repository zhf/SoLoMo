 const layout = ({ content }) => <div>
  <nav>
    <a href="/">posts</a>
    <a href="/todos">todos</a>
  </nav>
  {content()}
</div>

 export default layout
