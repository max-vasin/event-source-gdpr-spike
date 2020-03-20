import { USER_CREATED, USER_DESTROYED } from '../user_events'

export default {
  create: (
    { isExist },
    { aggregateId: keySelector, payload: { firstName, lastName, phoneNumber } },
    { encrypt }
  ) => {
    if (isExist) {
      throw Error(`user already exists`)
    }

    return encrypt(keySelector, {
      type: USER_CREATED,
      payload: {
        firstName,
        lastName,
        phoneNumber
      }
    })
  },
  destroy: (
    { isExist },
    { aggregateId: keySelector, payload: { firstName, lastName, phoneNumber } },
    { encrypt }
  ) => {
    if (isExist) {
      throw Error(`user already exists`)
    }

    return encrypt(keySelector, {
      type: USER_DESTROYED,
      payload: {
        firstName,
        lastName,
        phoneNumber
      }
    })
  }
}
