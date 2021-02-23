<template>
  <div>
    <Jumbotron
    class="bg-dark text-light"
    title="Making your brand better through bold design."
    subtitle="We start where you are. Then add zhuzh."
    button="Read more"
    variant="outline-light"
    to="/" />
    <div class="row min-h-100">
      <transition 
        name="fade"
        mode="out-in">
      <div class="col-lg-12 d-flex align-items-center justify-content-center">
        <!-- appear-class="custom-appear-class"
        appear-to-class="animate__animated animate__fadeInDownBig"
        appear-active-class="animate__animated animate__backOutDown"   -->
    <!-- appear-to-class="custom-appear-to-class" (2.1.8+) -->
          <!-- <h1>About!</h1> -->
      </div>
        </transition>

    </div>
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron';

export default {
  name: 'About',
  components: {
    Jumbotron
  }
}
</script>


<style>

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
