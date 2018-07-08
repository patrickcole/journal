import Vue from "vue";
import Hello from "./Hello.vue";

export function createApp() {
  return new Vue({
    el: "#app",
    render: h => h(Hello)
  })
}