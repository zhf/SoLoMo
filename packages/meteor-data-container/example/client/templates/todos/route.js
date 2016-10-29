import layout from '../layout'

import Index from './index'

FlowRouter.route('/todos', {
  action() {
    Mount(layout, {
      content: () => <Index />
    })
  }
})
