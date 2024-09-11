const app = Vue.createApp({
  data() {
    return {
      courseGoal: 123,
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue!";
      } else {
        return "Master Vue!";
      }
    },
  },
});

app.mount("#user-goal");
