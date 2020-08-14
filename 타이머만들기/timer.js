class timer {
  constructor({ time, timerList }) {
    this.time = time;
    this.timerName = `타이머 ${timer.timerNo}`;
    this.timerList = timerList;
    this.init();
    ++timer.timerNo;

    const intervalId = setInterval(() => {
      if (this.time > 0) {
        --this.time;
        this.updateTimer();
      } else {
        this.deleteTimer();
        clearInterval(intervalId);
      }
    }, 1000);
  }

  static timerNo = 0;

  init() {
    this.li = document.createElement("li");
    this.updateTimer();
    this.timerList.appendChild(this.li);
  }

  updateTimer() {
    this.li.innerText = `${this.timerName} : ${this.time}`;
  }

  deleteTimer() {
    this.li.remove();
  }
}
