import layout from '../layout'

import Index from './index'

FlowRouter.route('/channels', {
  action() {
    Mount(layout, {
      content: () => <Index />
    })
  }
})
