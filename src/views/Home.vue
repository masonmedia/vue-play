<template>
  <div>
    <Jumbotron
    class="bg-dark text-light"
    title="masonmedia"
    subtitle="vue · play"
    button="Read more"
    variant="outline-light"
    to="/about" />
  </div>
</template>

<style>
  .home {
    text-align: center;
    }
</style>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron'

export default {
  name: 'Home',
  components: {
    Jumbotron
  }
}
</script>
