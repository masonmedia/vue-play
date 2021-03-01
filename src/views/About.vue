<template>
  <div>
    <Jumbotron
    class=""
    title="Making your brand better through bold design."
    subtitle="We start where you are. Then add zhuzh."
    button="Read more"
    variant="outline-light"
    to="/" />
    <div class="row min-h-100">

      <div class="col-lg-12 d-flex align-items-center justify-content-center text-light">
          <h1 v-animate-onscroll="{down: 'animate__animated animate__bounceInDown', up: 'animate__animated bounceOutUp' }">About
          </h1>
          <!-- <transition-group name="list" tag="p">
            <span v-for="todo in todos" :key="todo" class="list-item">
              {{ todo.text }}
            </span>
          </transition-group> -->
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron';

export default {
  name: 'About',
  components: {
    Jumbotron
  },
  data() {
    return {
      // items: [a,b,o,u,t,m,e]
      todos: [
        { text: 'a' },
        { text: 'b' },
        { text: 'o' },
        { text: 'u' },
        { text: 't' }
      ]
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}

</script>


<style>

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}


.fade-enter {
  opacity: 0;
  transform: rotate(-45deg);
}
.fade-enter-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.fade-down-enter-active,
.fade-down-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-down-enter, .fade-down-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}

</style>
