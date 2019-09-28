// Promise 的使用
function firstPromise (toRes) {
  return new Promise(1)
}

resolveFirstPromise = false
resolveFirstThen = false

firstPromise(resolveFirstPromise).then(
  value => {
    console.log('first Then on resolve: ', value)
    return resolveFirstThen ? Promise.resolve('Resolve the first then') : Promise.reject('Reject the first then')
  },
  reason => {
    console.log('first Then on reject: ', reason)
    return resolveFirstThen ? Promise.resolve('Resolve the first then') : Promise.reject('Reject the first then')
  }).then(
    value => {
      console.log('second then on resolve: ', value)
      return resolveFirstThen ? Promise.resolve('Resolve the second then') : Promise.reject('Reject the second then')
    },
    reason => {
      console.log('second then on reject: ', reason)
      return resolveFirstThen ? Promise.resolve('Resolve the second then') : Promise.reject('Reject the second then')
    }
  ).catch(
    e => {
      console.log('on catch error: ', e)
    }
  )

