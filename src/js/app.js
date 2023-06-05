import '../css/app.css'
import { randomNumbers, randomString, test_api}  from './test.js'

import(/* webpackChunkName: "myModule", webpackPrefetch: true */ './dynamic_import').then(module => module.default())

console.log('Hello from app.js')

// Displays a random number between 100 and 10000
console.log(randomNumbers(100, 10000))
    
// Displays a random string
console.log(randomString())
console.log('start api')
test_api()
console.log('api closed')


