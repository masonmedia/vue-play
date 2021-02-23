<template>
    <div>
        <Jumbotron
        class="bg-warning"
        title="Improving your _____ (i.e. everything)."
        subtitle="From design to websites, writing & strategy, we make it better."
        button="Read more"
        variant="outline-dark"
        to="/" />
        <Card class="p-3" />
    </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';
import axios from 'axios';

export default {
    name: 'Services',
    components: {
        Jumbotron,
        Card
    },
    data() {
        return {
            users: null,
        }
    },
    created: function() {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.users = res.data;
        })
    }
}

</script>