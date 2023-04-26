/* 
    Context : 

*/

import React,{createContext} from 'react'

const TestContext = createContext({
    name:'张三',
    age:19
})

export default TestContext