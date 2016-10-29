const index = () => <div id='ui-sender'>
  <form id='messageForm' onSubmit={submit}>
    <input type='text' name='text' required/>
    <input type='submit' />
  </form>
</div>

function submit(e) {
  e.preventDefault()
  const opt = form2js('messageForm')
  opt.channel = FlowRouter.current().params.name
  Meteor.call('messages:new', opt)
}

export default index
