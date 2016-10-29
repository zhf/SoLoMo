import layout from '../layout'

import Index from './index'

FlowRouter.route('/profile', {
  action() {
    Mount(layout, {
      content: () => <Index />
    })
  }
})
