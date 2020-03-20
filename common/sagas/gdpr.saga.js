import { forget } from '../../resolve-event-encryption'
import { USER_DESTROYED } from '../user_events'

export default {
  handlers: {
    [USER_DESTROYED]: async ({ sideEffects }, { aggregateId }) => {
      await sideEffects.forgetEncryptionKey(aggregateId)
    }
  },
  sideEffects: {
    forgetEncryptionKey: async keySelector => {
      // eslint-disable-next-line no-console
      await forget(keySelector)
    }
  }
}
