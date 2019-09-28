class Promise {
  constructor (executor) {
    // 错误校验
    if (typeof executor !== 'function') 
      throw TypeError(`Promise resolver ${executor} is not a function`)
    _init()
  }

  resolve () {

  }

  reject () {

  }

  _init () {
    this.value = null
    this.reason = null
    this.state = 'pending'
  }
}