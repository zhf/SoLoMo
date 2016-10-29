import layout from '../layout'

import Index from './index'

FlowRouter.route('/map', {
  action() {
    Mount(layout, {
      content: () => <Index />
    })
  }
})
