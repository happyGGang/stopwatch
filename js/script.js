;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  class StopWatch {
    constructor (element) {
      this.timer = element
      this.interval = null
      this.defaultTime = '00:00:00'
      this.time = 0
      this.elapsedTime = 0
    }

    timeToString(time) {
      const date = new Date(time)
      const minutes = date.getUTCMinutes
      const seconds = date.getUTCSeconds
        const milliseconds = date.getUTCMilliseconds
    }

    startTimer() {
      this.elapsedTime = Date.now() - this.startTime
      const time = this.timeToString(this.elapsedTime)
    }

    start () {
      this.startTime = Date.now() - this.elapsedTime
      this.interval = setInterval( this.startTimer.bind(this), 10)
    }
    stop () {}
    reset () {}
  }

  const $startButton = get('.timer_button.start')
  const $timer = get('.timer')
  const stopWatch = new StopWatch($timer)

  $startButton.addEventListener('click', () => {
    stopWatch.start()
  })
})()
