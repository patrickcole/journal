import Vue from 'vue';
import App from './App.vue';

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});