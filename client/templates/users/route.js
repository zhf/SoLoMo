import layout from '../layout'

import Index from './index'

FlowRouter.route('/users/:_id', {
  action() {
    Mount(layout, {
      content: () => <Index />
    })
  }
})
