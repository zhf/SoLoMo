## Installation

    meteor npm i lodash react-komposer --save

    meteor add crapthings:meteor-data-container

## Usage

> publish your `posts` and return your posts cursor

```
Meteor.publish('posts', function (userId) {
    const selector = userId ? { userId } : {}
    return Posts.find(selector)
})
```

> use `MeteorDataContainer` to get your `reactive` data

```

const subscriptions = {
  posts: []
}

const data = {
  posts () {
    return Posts.find().fetch()
  {
}

const PostsListComponent = () => <MeteorDataContainer sources={{ subscriptions, data }} component={({ posts }) => <div>
  {posts.map(post) => <p key={post._id}>{post.title}</p>}
</div>} />

```

> "subscriptions" is an object. each of keys in subscriptions is the subscribe name, and value should be an array that apply as publish args

> "data" is an object, each of keys can be use in container under props
