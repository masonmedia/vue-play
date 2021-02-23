<template>
  <div id="app">
    <Nav />

    <transition name="slide-fade" mode="out-in">
    <!-- <transition
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn aimate__slow"
    leave-active-class="animate__animated animate__fadeOutDown"> -->
      <!-- mode="out-in" -->
      <router-view/>
    </transition>

  </div>
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style>

#nav a.router-link-exact-active {
  color: #42b983;
}
/* .slide-enter-active, 
.slide-leave-active {
  transition: opacity .5s, transform .5s;
  }
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    } */

    .slide-fade {
      backface-visibility: hidden;
  }

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
  background: pink;
}

</style>
