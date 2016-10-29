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

const index = () => <MeteorDataContainer sources={{ subscriptions, data, }} component={({ user }) => <div>
  <h3>{user.username}</h3>
</div>
} />

export default index
