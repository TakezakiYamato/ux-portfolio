<template>
  <div v-show="loading">
    <div class="fullview">
      <div class="loading-spacer"></div>
      <vue-loading
        type="bars"
        :size="{ width: '100px', height: '100px' }"
        color="#aaa">        
      </vue-loading>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { VueLoading } from 'vue-loading-template'
export default Vue.extend({
  name: 'loading',
  components: {
    VueLoading
  }
})
</script>
<style>
.fullview {
  width: 100%;
  height: 100%;
  background: #f7f9fc;
  position: fixed;
  top: 0;
  left: 0;
}
.loading-spacer {
  height: 30%;
}
</style>