import React from 'react'
import '../assets/styles/global.css'
import Features from './features'
import { data } from '../data'

const App = () => {
  return (
    <div>
        <Features data={data} />
    </div>
  )
}

export default App