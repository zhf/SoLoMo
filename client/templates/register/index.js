const index = () => <div>
  <form id='registerForm' onSubmit={submit}>
    <input type='text' name='username' defaultValue='' />
    <input type='password' name='password' defaultValue='' />
    <input type='submit' value='注册' />
  </form>

  <a href='/'>登录</a>
</div>

function submit(e) {
  e.preventDefault()
  const opt = form2js('registerForm')
  Accounts.createUser(opt, err => !err && FlowRouter.go('/'))
}

export default index
