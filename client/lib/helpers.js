Meteor.getChannelName = function () {
  return (FlowRouter.current().params && FlowRouter.current().params.name) ? FlowRouter.current().params.name : null
}
