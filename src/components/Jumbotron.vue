<template>
    <b-container fluid>
        <b-row class="min-h-100 bg-dark text-light">
            <b-col cols="12" lg="8" class="d-flex flex-column justify-content-center align-items-start p-5 my-4">
                <pu-stagger
                id = "myStagger"
                tag = "div"
                :show = "show"
                :interval = "1"
                :duration = ".5"
                :reverse = "true"
                ease-type = "linear"
                >
                <h1 class="stroke display-1 font-light">{{ title }}</h1>
                <h2 class="h3 font-italic my-3">{{ subtitle }}</h2>
                <router-link :to="to">
                    <b-button :variant="variant">
                        {{ button }}
                    </b-button>
                </router-link>
                </pu-stagger>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "Jumbotron",
    props: [
        "title",
        "subtitle",
        "button",
        "variant",
        "to"
        ],
    data() {
        return {
            show:false
        }
    },
    mounted() {
    window.scrollTo(0, 0);
    this.show = !this.show;
  }
}
</script>

<style>
    .display-1 {
        line-height: 0.7;
    }
    .stroke {
        -webkit-text-stroke: 1px pink;
        color: transparent;
    }
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
</style>
