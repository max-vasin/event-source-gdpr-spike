const appConfig = {
  aggregates: [
    {
      name: 'user',
      commands: 'common/aggregates/user.commands.js',
      projection: 'common/aggregates/user.projection.js'
    }
  ],
  readModels: [
    {
      name: 'users',
      projection: 'common/read-models/users.projection.js',
      resolvers: 'common/read-models/users.resolvers.js',
      connectorName: 'default'
    }
  ],
  viewModels: [
    {
      name: 'user',
      projection: 'common/view-models/user.projection.js',
      serializeState: 'common/view-models/user.serialize_state.js',
      deserializeState:
        'common/view-models/user.deserialize_state.js'
    }
  ],
  sagas: [
    {
      name: 'gdpr',
      source: 'common/sagas/gdpr.saga.js',
      connectorName: 'default',
      schedulerName: 'scheduler'
    }
  ],
  clientEntries: ['client/index.js']
}

export default appConfig
