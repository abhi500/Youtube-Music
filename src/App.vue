<template>
  <div id="app" @click="hideProfile">
    <div class="app__navbar">
      <navbar></navbar>
    </div>
    <div class="app__main">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

import Navbar from './components/Navbar';
import { EventBus } from './event-bus.js';

export default {
  name: 'App',
  components: {
    navbar: Navbar,
  },

  methods: {
    hideProfile(){
      EventBus.$emit('hideProfile');
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
  position: sticky;
  top: 0;
}

.app__main{
  flex: auto;
}

</style>
