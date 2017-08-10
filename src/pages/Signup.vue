<template>
  <div id="example-1">
    <p>screen-name</p>
    <input v-model="screenName" ></input>

    <p>password</p>
    <input v-model="password" type="password"></input>
    
    <p />
    <button v-on:click="register">登録</button>
  </div>
</template>

<script>
import Vue from 'vue';
import account from '../lib/accounts';

export default {
  data() {
    return{
      screenName: "",
      password: ""
    }
  },
  methods: {
    register: function() {
      console.log(screenName)
      console.log(password)
    }
  }
}
</script>

<style>
</style>
