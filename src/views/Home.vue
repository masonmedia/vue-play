<template>
  <div>
    <b-jumbotron 
    class="min-h-100 d-flex flex-column justify-content-center align-items-start"
    header="BootstrapVue" 
    lead="Bootstrap v4 Components for Vue.js 2"
    >
      <p>For more information visit website</p>
      <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<style>
  .home {
    text-align: center;
    }
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
