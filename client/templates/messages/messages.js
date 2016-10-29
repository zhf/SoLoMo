import Channels from '/collections/channels'

import Hook from '/react-hook'

import SkillSquare from '../skillSquare'

const subscriptions = {
  'messages:channels:name'() {
    return [Meteor.getRouteParams('name')]
  },

  'messages:users:conversation'() {
    const params = [Meteor.getRouteParams('_id'), Meteor.userId()]
    return [params]
  }
}

const data = {

  channel() {
    return Channels.findOne({
      name: FlowRouter.current().params.name
    })
  },

  channelName() {
    return FlowRouter.current().params.name
  },

  messages() {
    const channel = Meteor.getRouteParams('name')

    const _id = Meteor.getRouteParams('_id')

    if (channel) {
      return Messages.find({ channel, }, {
        sort: {
          createdAt: 1
        }
      }).map(message => ({
        user: message.user ? message.user : Meteor.users.findOne(message.userId),
        ...message,
      }))
    }

    if (_id) {
      return Messages.find({
        $or: [
          { $and: [{ userId: Meteor.userId() }, { toId: _id }] },
          { $and: [{ userId: _id }, { toId: Meteor.userId() }] },
        ]
      }, {
        sort: {
          createdAt: 1
        }
      }).map(message => ({
        user: message.user ? message.user : Meteor.users.findOne(message.userId),
        ...message,
      }))
    }

  }

}

const index = () => <MeteorDataContainer sources={{ subscriptions, data, }} component={({ messages, channelName }) => <div className='flex flex-column'>
  <div id='ui-messages' className='flex flex-column flex-1'>
    {messages.map(({ _id, user, ...message }) => <div key={_id} className={(message.userId == Meteor.userId()) ? 'ui-my-message' : ''} className="ui-message">
      <div className="message-header">
        <img src={user.avatarUrl} className='ui-img-circle ui-avatar ui-pointer' onClick={() => viewProfile(message.userId) } />
        <SkillSquare />
        <span className='ui-pointer chatter-name' onClick={() => viewProfile(message.userId)}>{user.username}</span>
      </div>
      <div>{message.text}</div>
    </div>)}
  </div>
  <Hook didMount={scrollToBottom} didUpdate={scrollToBottom} />
</div>} />

function viewProfile(_id) {
  (_id == Meteor.userId()) ? FlowRouter.go(`/profile`) : FlowRouter.go(`/users/${_id}`)
}

function scrollToBottom() {
  $('#ui-main').scrollTop(999999)
}

export default index
