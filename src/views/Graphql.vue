<template>
    <div class="min-h-100 d-flex flex-column justify-content-center align-items-start text-light p-5">
        <pu-stagger
        id = "myStagger"
        tag = "div"
        :show = "show"
        :interval = "0"
        :duration = ".5"
        :reverse = "true"
        ease-type = "linear-inout"
        >
      <h1 class="display-1 stroke">Projects</h1>
      <h2 class="">Big Time!</h2>
      <p>All kinds of stuff in the mix</p>
      <button class="btn btn-outline-pink">Read more</button>
   </pu-stagger>
    <!-- <transition appear name="slide">
        <h1 class="display-1">Vue transitions</h1>
    </transition>
    <transition appear name="down">
        <h2 class="display-3">Big Time!</h2>
    </transition> -->
    <div class="py-5" v-for="repo in repos" :key="repo.id">
        <img class="img-thumbnail w-25 rounded-circle shadow" :src="repo.owner.avatar_url" />
        <h2>{{ repo.name }}</h2>
        <ul class="list-unstyled">
            <li>{{ repo.description }}</li>
            <li>{{ repo.language }}</li>
            <li>{{ repo.updated_at }}</li>
            <!-- 'You loaded this page on ' + new Date().toLocaleString() -->
        </ul>
        <a :href="repo.homepage" rel="noreferrer" target="_blank"> 
            <button class="btn btn-outline-light">
                Live site
            </button>
        </a>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'Graphql',
    // components: {
    //     Jumbotron
    // },
    data() {
        return {
            repos: '',
            show:false
        }
    },
    mounted() {
    window.scrollTo(0, 0);
    this.show = !this.show;

       axios.get("https://api.github.com/users/masonmedia/repos")
        .then(response => {
            this.repos = response.data
            console.log(response.data);
        })
       .catch(function (error) {
             console.log(error);
        });
  }
};
</script>

<style>
 #myStagger>.item {
      transition: all 1s ease;
   }
   #myStagger>.item-from {
      transform: translateY(-100px);
      opacity: 0;
   }
   #myStagger>.item-to {
      transform: translateY(0);
      opacity: 1;
   }

.slide-enter-active,
.slide-leave-active,
.down-enter-active,
.down-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(100px) scale(0) rotate(-45deg);
  opacity: 0;
  color: #00ced1;
}
.down-enter, .down-leave-to {
    transform: translateY(-100px) scale(2) skewY(20deg);
    opacity: 0;
    font-weight: bold;
}
</style>