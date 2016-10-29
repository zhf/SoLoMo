import React, { Component, PropTypes } from 'react'

export default class Hook extends Component {
  static propTypes = {
    willMount: PropTypes.func,
    didMount: PropTypes.func,
    willUnmount: PropTypes.func,
    didUpdate: PropTypes.func,
  }

  constructor({ willMount, didMount, willUnmount, didUpdate }) {
    super()
    this.componentWillMount = willMount
    this.componentDidMount = didMount
    this.componentWillUnmount = willUnmount
    this.componentDidUpdate = didUpdate
  }

  render() {
    return null
  }
}
