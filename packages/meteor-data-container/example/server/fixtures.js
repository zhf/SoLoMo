import Sugar from 'sugar'

import sizeof from 'object-sizeof'

const data = _.times(50000, n => ({
  title: faker.lorem.sentence(),
  // desc: faker.lorem.paragraphs(),
  createdAt: new Date(),
  canView: _.sample([true, false]),
}))

Meteor.methods({
  getData () {
    return data
  }
})

console.log(Sugar.Number.bytes(sizeof(data)))
