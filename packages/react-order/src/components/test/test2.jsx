import React, { useContext } from 'react'
import TestContext from '../../store/testContext'

export default function Test2() {
    const ctx = useContext(TestContext)
    return (
        <div>{ctx.name}</div>
    )
}
