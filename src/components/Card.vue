<template>
    <div>
        <!-- <ul v-for="user in users" v-bind:key="user.id">
            <li>{user.name}</li>
        </ul> -->

        <div v-for="user in users" v-bind:key="user.id">

        <b-card v-for="image in images" v-bind:key="image.id"
        no-body
        class="mb-3 shadow"
        style="max-width: 20rem;"
        :img-src="image.thumbnailUrl"
        img-alt="Image"
        img-top
        >

            <b-card-body>
                <img :src="user.url" />
                <b-card-title>{{ user.name }}</b-card-title>
                <b-card-sub-title class="mb-2">{{ user.username }}</b-card-sub-title>
                <b-card-text>
                    {{ user.company.catchPhrase }}
                </b-card-text>
            </b-card-body>

            <b-list-group class="font-weight-light" flush>
                <b-list-group-item>email: {{ user.email }}</b-list-group-item>
                <b-list-group-item>phone: {{ user.phone }}</b-list-group-item>
                <b-list-group-item>company: {{ user.company.name }}</b-list-group-item>
            </b-list-group>

            <b-card-body>
                <a :href="user.website" target="_blank" rel="noreferrer" class="btn btn-outline-dark">Website</a>
            </b-card-body>
        </b-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Card',
    data() {
        return {
            users: []
        }
    },

    // https://dev.to/ljnce/use-axios-api-with-vue-cli-54i2
    //     mounted () {
    //     axios
    //       .get('https://jsonplaceholder.typicode.com/users')
    //       .then(response => (this.users = response))
    //   }

// multiple calls in same request using axios.all and array
mounted() {
    axios.all([axios.get(`https://jsonplaceholder.typicode.com/users`),
    axios.get(`https://jsonplaceholder.typicode.com/photos`)])
     .then(axios.spread((firstResponse, secondResponse) => { 
         this.users = firstResponse.data;
         this.images = secondResponse.data; 
         console.log(firstResponse.data,secondResponse.data);
     }))
     .catch(error => console.log(error))
    }

     

//Use **mounted** if you want to print it on the screen.
// mounted() {
//    axios.get("https://jsonplaceholder.typicode.com/users")
//         .then(response => {
//             this.users = response.data
//             console.log(response.data);
//         })
//        .catch(function (error) {
//              console.log(error);
//         });
//     }

// coindesk call
// axios
//   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//   .then(response => (this.info = response.data.bpi))
// }

// call from local file
// axios.get('http://localhost:8080/products')
//                 .then(res => {
//                     this.products = res.data;
//                 })
//                 .catch(err => {
//                     // handle error
//                     console.log(err);
//                 })

//Use **methods** if you have @click function.
// methods(){
//    click() {
//     AXIOS CALL
//    }
// }
}

</script>