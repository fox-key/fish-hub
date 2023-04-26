import React from 'react'
import TestContext from '../../store/testContext'


export default function Test() {
  return (
    <TestContext.Consumer>
        {(ctx)=>{
            return (
                <div>
                    {ctx.name}---{ctx.age}
                </div>
            )
        }}
    </TestContext.Consumer>
  )
}
