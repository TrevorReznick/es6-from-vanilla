const axios = require('axios')

export function randomNumbers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomString() {
    function randStr(){
        return Math.random().toString(36).substring(2, 15)
    }    
    return randStr() + randStr();
}


export function test_api () {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // Gestisci la risposta
            console.log(response.data);
        })
        .catch(error => {
            // Gestisci l'errore
            console.error(error)
        })
}