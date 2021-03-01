<template>
    <b-row class="p-0">
        <b-col 
        lg="3" md="6" sm="12" 
        class="d-flex flex-wrap p-2" 
        v-for="user in users" v-bind:key="user.id">

            <b-card
            v-animate-onscroll="{down: 'animate__animated animate__fadeIn', up: 'animate__animated rotateOut' }"
            no-body
            class="w-100 shadow"
            style="border-radius: 10px;"
            img-src=""
            img-alt="Image"
            img-top
            >
            <b-card-body
            v-animate-onscroll="{down: 'animate__animated animate__fadeInRight', up: 'animate__animated rotateOut' }">
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
        </b-col>
    </b-row>
        
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
         this.users = firstResponse.data, secondResponse.data; 
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
