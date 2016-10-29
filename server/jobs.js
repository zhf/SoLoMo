SyncedCron.add({
  name: 'get dtags',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 5 s')
  },
  job: function() {
    const users = Users.find().fetch()

    const userIds = _.map(users, '_id')

    _.each(userIds, id => {

      const messages = Messages.find({ userId: id}).fetch()
      const text = _.map(messages, 'text').join()

      const data = {
        data: text,
        topN: 5,
      }

      HTTP.post('http://localhost:8000/api/cutWords', {
        data,
        headers: {
          'Content-Type': 'application/json'
        }
      }, (err, resp) => {
        if (!err && resp.data.length) {
          _.each(resp.data, tags => {

            Users.update(id, {
              $addToSet: {
                dtags: tags[0]
              }
            })

            if (!Channels.findOne({ name: tags[0] })) {
              Channels.insert({
                name: tags[0]
              })
            }
          })
        }
      })

    })

  }
})

SyncedCron.start()
