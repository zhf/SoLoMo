// SyncedCron.add({
//   name: 'Crunch some important numbers for the marketing department',
//   schedule: function(parser) {
//     // parser is a later.parse object
//     return parser.text('every 5 s')
//   },
//   job: function() {
//     // const data = JSON.stringify({
//     //   data: 'asdasdasdasd, lkasjelkjase, lkjase',
//     //   topN: 3,
//     // })
//     // console.log(data)

//     const texts = _.map(Messages.find().fetch(), 'text').join()

//     const data = {
//       data: texts,
//       topN: 3,
//     }

//     // console.log(data)

//     HTTP.post('http://localhost:8000/api/cutWords', {
//       data,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }, (err, resp) => {
//       // console.log(err, resp)
//     })

//   }
// })

// SyncedCron.start()
