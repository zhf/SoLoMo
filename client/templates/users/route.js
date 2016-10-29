import layout from '../layout'

import senderLayout from '../layout/sender'

import Index from './index'

import ChannelMessages from '../messages/messages'

FlowRouter.route('/users/:_id', {
  action() {
    Mount(layout, {
      content: () => <Index />
    })
  }
})

FlowRouter.route('/users/:_id/messages', {
  action() {
    Mount(senderLayout, {
      content: () => <ChannelMessages />
    })
  }
})
