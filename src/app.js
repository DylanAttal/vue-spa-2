import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'Hello Vue'
  },
  template: '<div id="app">{{ hello }}</div>'
})

export { app }
