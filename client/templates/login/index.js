const index = () => <div>
  <form id='loginForm' onSubmit={submit}>
    <input type='text' name='username' defaultValue='demo' />
    <input type='password' name='password' defaultValue='demo' />
    <input type='submit' value='login' />
  </form>
  <a href='/register'>注册</a>
</div>

function submit(e) {
  e.preventDefault()
  const opt = form2js('loginForm')
  Meteor.loginWithPassword(opt.username, opt.password)
}

export default index
