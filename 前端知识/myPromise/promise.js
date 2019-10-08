class Promise {
  constructor (executor) {
    // 错误校验
    if (typeof executor !== 'function') 
      throw TypeError(`Promise resolver ${executor} is not a function`)
    this._init()
    executor(this.resolve, this.reject)
  }21

  resolve (value) {
    if (this.state === 'pending') {
      this.state = 'fulfilled'
      this.value = value
    }
  }

  reject (reason) {
    if (this.state === 'pending') {
      this.state = 'rejected'
      this.reason = reason
    }
  }

  _init () {
    this.value = null
    this.reason = null
    this.state = 'pending'
  }
}

module.exports = {
  promise: Promise
}