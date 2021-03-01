<template>
  <div>
    <Jumbotron
    v-animate-onscroll="{down: 'animate__animated aniamte__flip', up: 'animate_animated animate__rotateOut' }"
    title="masonmedia"
    subtitle=""
    button="Read more"
    variant="outline-pink"
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
