import layout from '../layout/blank'

import Index from './index'

FlowRouter.route('/register', {
  action() {
    Mount(layout, {
      content: () => <Index />
    })
  }
})
