<template>
  <div>
    <div>News...............XXXX</div>
    <div v-for="user in users" v-bind:key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    // var vm = this;
    fetchNewsList()
      //es6
      .then(response => {
        console.log(response);
        this.users = response.data
      })
      .catch(error => console.log(error));
      //es5
      // .then(function(response) {
      //   console.log(response);
      //   vm.users = response.data;
      // })
      // .catch(function(error){
      //   console.log(error);
      // });
  },
}
</script>

<style>
</style>