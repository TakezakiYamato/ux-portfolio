<template>
  <v-app id="app">
    <Header/>
    <Top/>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Top from './components/Top';

export default {
  name: 'App',

  components: {
    Header,
    Top
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
