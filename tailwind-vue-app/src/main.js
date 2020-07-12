import Vue from "vue";
import App from "./App.vue";
import "./assets/css/style.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

new Vue({
  el: "#js-ui",

  data() {
    return {
      scene: 0,
      maxScene: 8
    };
  },

  mounted() {
    setTimeout(() => {
      this.scene = this.maxScene - 3;
    }, 1000);
  }
});
