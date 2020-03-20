const getUsers = async (store, { target, targetId }) =>
  store.find(
    'comments',
    {
      target,
      targetId
    },
    null,
    { createdAt: -1 }
  )

export default {
  getUsers
}
