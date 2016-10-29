import layout from '../layout'

import Index from './index'

FlowRouter.route('/', {
  action() {
    Mount(layout, {
      content: () => <Index />
    })
  }
})
