<template>
    <b-container fluid>
        <b-row class="min-h-100">
            <b-col cols="12" lg="8" class="d-flex flex-column justify-content-center align-items-start p-5 my-4">
                <h1 class="display-1 font-light">{{ title }}</h1>
                <h2 class="h3 font-italic my-3">{{ subtitle }}</h2>
                <router-link :to="to">
                    <b-button :variant="variant">
                        {{ button }}
                    </b-button>
                </router-link>
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
        ]
}
</script>

<style>
    .display-1 {
        line-height: 0.7;
    }
</style>
