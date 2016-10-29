Meteor.getRouteParams = function (paramsName) {
  return (FlowRouter.current().params && FlowRouter.current().params[paramsName]) ? FlowRouter.current().params[paramsName] : null
}
