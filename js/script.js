const { createApp } = Vue

createApp({
    data() {
        return{
        }
    },
    methods: {
        getEmail(){

        }
    }
}).mount('#app')

const emaiList = [];

for(let i = 0 ; i < 10 ; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function (res){
        console.log(res.data.response);
        emaiList.push(res.data.response);
    });
}

console.log(emaiList);