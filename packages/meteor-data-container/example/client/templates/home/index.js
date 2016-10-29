const subscriptions = {
  posts: [],
}

const data = {
  posts() {
    return Posts.find().fetch()
  },
}

const index = () => <MeteorDataContainer cache={true} sources={{ subscriptions, data }} component={({ posts }) => <div>
  <h3>posts</h3>
  {posts.map(doc => <p>
    {doc.title}
  </p>)}
</div>} />

export default index
