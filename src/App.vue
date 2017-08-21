<template>
  <div id="app">
    <router-view></router-view>
    <Tablar></Tablar>
    
  </div>
</template>

<script>
import Tablar from './components/tablar'
export default {
  name: 'app',
  components:{Tablar},
  created:function(){
    this.$router.push('/')
  }
}
</script>

<style>
#app {

 
  
}
</style>
