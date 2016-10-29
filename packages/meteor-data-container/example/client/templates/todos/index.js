// no cache todos

const subscriptions = {
  todos: [],
}

const data = {
  todos() {
    return Todos.find().fetch()
  },
}

const index = () => <MeteorDataContainer sources={{ subscriptions, data }} component={({ todos }) => <div>
  <h3>todos</h3>
  {todos.map(doc => <p>
    {doc.title}
  </p>)}
</div>} />

export default index
