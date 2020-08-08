<template>
  <div id="app" @click="hideProfile">
    <div class="app__navbar app__navbar--size">
      <navbar></navbar>
    </div>
    <div class="app__home app__home--size">
      <home></home>
    </div>

  </div>
</template>

<script>

import Navbar from './components/Navbar';
import Home from './components/Home';
import { EventBus } from './event-bus.js';

export default {
  name: 'App',
  components: {
    navbar: Navbar,
    home: Home
  },

  methods: {
    hideProfile(){
      EventBus.$emit('hideProfile');
      console.log(1)
    }  
  },
}
</script>

<style>

*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  background-color: black;
}

.app__navbar{
  flex: auto;
}

.app__home{
  flex: auto;
}

</style>
