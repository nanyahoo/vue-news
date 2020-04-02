<template>
  <div>
    <div>ask...............XXXX</div>
    <div v-for="item in ask" v-bind:key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {    //컴포넌트가 실행되자 마자 실행되는것
    // var vm = this;
    fetchAskList()
      .then(response => this.ask = response.data)
      .catch(error => console.log(error));
  },
}
</script>

<style>
</style>