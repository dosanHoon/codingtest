class timerInput {
  constructor() {
    ++timerInput.timerInputCount;
    this.timerInputId = `timerInput${timerInput.timerInputCount}`;
    this.timerClearId = `timerClear${timerInput.timerInputCount}`;
    this.timerListId = `timerList${timerInput.timerInputCount}`;
    this.init();
  }

  static timerInputCount = 0;
  static rootWrap = document.getElementById("root");

  timers = [];

  init() {
    const root = timerInput.rootWrap;

    const timerForm = document.createElement("form");
    timerForm.addEventListener("submit", (e) => {
      console.log("e", e);
      e.preventDefault()
      return false
    });

    const Input = document.createElement("input");
    Input.type = "number";
    Input.max = 60;
    Input.min = 1;
    Input.id = this.timerInputId;
    Input.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        this.timers.push(
          new timer({ time: e.target.value, timerList: timerList })
        );
      }
    });
    Input.addEventListener("change", (e) => {
      if (e.target.value >= 60) {
        e.target.value = 60;
        e.preventDefault();
      }
    });

    const Button = document.createElement("button");
    Button.id = this.timerClearId;
    Button.innerText = "완료하기";
    Button.addEventListener("click", () => {
      this.timers.forEach((timer) => {
        timer.time = 0;
        timer.updateTimer();
      });
    });

    const timerList = document.createElement("ul");
    timerList.id = this.timerListId;

    timerForm.appendChild(Input);
    timerForm.appendChild(timerList);
    timerForm.appendChild(Button);
    root.appendChild(timerForm);
  }
}
