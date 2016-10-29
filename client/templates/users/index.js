const subscriptions = {
  'users:_id'() {
    return [Meteor.getRouteParams('_id')]
  }
}

const data = {
  user() {
    const { _id } = FlowRouter.current().params
    return Meteor.users.findOne(_id)
  }
}

const index = () => <MeteorDataContainer sources={{ subscriptions, data, }} component={({ user }) => <div className='flex flex-column'>
  <div className='flex flex-center'>
    <div className='flex flex-column'>
      <img src={user.avatarUrl} />
      <h4>{user.username}</h4>
    </div>
  </div>

  <div>
    {user.intro}
  </div>

  <div>
    <a href={`/users/${user._id}/messages`}>talk</a>
  </div>
</div>
} />

export default index
