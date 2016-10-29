const index = () => <div id='ui-sender'>
  <form id='messageForm' onSubmit={submit}>
    <input type='text' name='text' placeholder='' required />
    <input type='submit' />
    <input id='messageFormReset' type='reset' />
  </form>
</div>

function submit(e) {
  e.preventDefault()
  const opt = form2js('messageForm')
  opt.channel = FlowRouter.current().params.name
  Meteor.call('messages:new', opt, (err) => !err && $('#messageFormReset').trigger('click'))
}

export default index
