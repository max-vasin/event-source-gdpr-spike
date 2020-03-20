import { USER_CREATED, USER_DESTROYED } from '../user_events'

export default {
  Init: async store => {
    await store.defineTable('users', {
      indexes: { id: 'string' },
      fields: ['firstName', 'lastName', 'phoneNumber']
    })
  },
  [USER_CREATED]: async (store, { aggregateId, payload }) => {
    // The payload is null only if decryption was failed
    // We "pass thru" encrypted events without keys
    if (payload !== null) {
      const { firstName, lastName, phoneNumber } = payload
      await store.insert('users', {
        id: aggregateId,
        firstName,
        lastName,
        phoneNumber
      })
    }
  },
  [USER_DESTROYED]: async (store, { aggregateId }) => {
    // Manually remove personal data from the read model
    await store.delete('users', {
      id: aggregateId
    })
  }
}
