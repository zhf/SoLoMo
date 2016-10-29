import layout from '../layout'

import Index from './index'

import ChannelMessages from '../messages/messages'

FlowRouter.route('/channels', {
  action() {
    Mount(layout, {
      content: () => <Index />
    })
  }
})

FlowRouter.route('/channels/:name', {
  action() {
    Mount(layout, {
      content: () => <ChannelMessages />
    })
  }
})
