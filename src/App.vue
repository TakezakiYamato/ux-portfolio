<template>
  <v-app id="app">
    <Header/>
    <Top/>
    <Skill/>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Top from './components/Top';
import Skill from './components/Skill';

export default {
  name: 'App',

  components: {
    Header,
    Top,
    Skill
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  background-color:#f7f9fc;
}
</style>
