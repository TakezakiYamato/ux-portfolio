<template>
  <v-app id="app">
    <Header/>
    <Top/>
    <Skill/>
    <Work/>
    <About/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Top from './components/Top';
import Skill from './components/Skill';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Top,
    Skill,
    Work,
    About,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
<style>
/* Google fontの導入 */
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700;900&family=Montserrat:wght@500;600;700;800&family=Noto+Sans+JP:wght@400;500;700;900&family=Playfair+Display:wght@700;800&display=swap');

#app {
  background-color:#f7f9fc;
}
</style>
