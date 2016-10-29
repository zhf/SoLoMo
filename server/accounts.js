Accounts.onCreateUser((option, user) => {
  option.avatarUrl = faker.internet.avatar()
  return _.extend(user, option)
})
