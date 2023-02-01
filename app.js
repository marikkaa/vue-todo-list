Vue.createApp({
  data() {
    return {
      inputValue: "",
      taskList: [],
    };
  },
  methods: {
    inputHandler(event) {
      this.inputValue = event.target.value;
    },
    addTask() {
      if (this.inputValue === "") {
        return;
      }
      this.taskList.push({
        title: this.inputValue,
        id: Date.now(),
        complete: false,
      });
      this.inputValue = "";
    },
    removeTask(task) {
      this.taskList.splice(this.taskList.indexOf(task), 1);
    },
  },
}).mount("#app");
