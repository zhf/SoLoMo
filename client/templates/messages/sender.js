const index = () => <div id='ui-sender'>
  <form id='messageForm' onSubmit={submit} className='flex flex-row'>
    <input type='text' className='flex-grow' name='text' placeholder='' required />
    <input type='submit' value="&nbsp;SEND" />
  </form>
</div>

function submit(e) {
  e.preventDefault()
  const form = e.currentTarget
  const opt = form2js(form.id)
  opt.channel = FlowRouter.current().params.name
  if (Meteor.getRouteParams('_id')) {
    opt.toId = Meteor.getRouteParams('_id')
  }
  Meteor.call('messages:new', opt, (err) => !err && form.reset())
}

export default index
