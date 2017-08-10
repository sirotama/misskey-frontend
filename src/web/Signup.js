import Vue from 'vue';
import account from '../lib/accounts';

var register = new Vue({
  data: {
    return() {
      name: ""
    }
  },
  methods: {
    test: function (event) {
      console.log('test');
    }
  }
})

export default register
