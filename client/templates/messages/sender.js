const index = () => <div id='ui-sender'>
  <form id='messageForm' onSubmit={submit}>
    <input type='text' name='text' placeholder='' required />
    <input type='submit' />
  </form>
</div>

function submit(e) {
  e.preventDefault()
  const form = e.currentTarget
  const opt = form2js(form.id)
  opt.channel = FlowRouter.current().params.name
  if (Meteor.getRouteParams('_id')) {
    opt.to = Meteor.getRouteParams('_id')
  }
  console.log(opt)
  Meteor.call('messages:new', opt, (err) => !err && form.reset())
}

export default index
