import { composeWithTracker as ComposeDataContainer } from 'react-komposer'

import { map, mapValues, every, isFunction } from 'lodash'

MeteorDataContainerCache = new SubsManager()

MeteorDataContainer = ({ sources, component, ...options }) => {
  const _data = sources.data
  const _subscriptions = sources.subscriptions

  const Subscribe = options.cache ? MeteorDataContainerCache.subscribe.bind(MeteorDataContainerCache) : Meteor.subscribe

  function defaultTracker(props, onData) {
    const _loaded = _subscriptions ? map(_subscriptions, (val, key) => {
      const _val = isFunction(val) ? val() : val
      return Subscribe(key, ..._val).ready()
    }) : [true]
    const data = mapValues(_data, (val) => isFunction(val) ? val() : val)
    every(_loaded) && onData(null, data)
  }

  const DataContainer = ComposeDataContainer(defaultTracker)(component)

  return new DataContainer()
}
