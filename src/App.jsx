import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h2>Life is Your Mountain</h2>
  <h4>What are you willing to do?</h4>
<div className='container'>
  <div className='wrapper'>  <img src="https://www.ultimatekilimanjaro.com/wp-content/uploads/2023/08/elbrus.jpg" alt="kilimanjaro" />
  </div>
  <div className='wrapper'><img src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2018/07/fotolia_169832225_subscription_xxl.jpg?fit=1000%2C666&ssl=1" alt="" /></div>
  <div className='wrapper'><img src="https://s1.travix.com/blog/eu/europe-switzerland-autumn-zermatt-matterhorn-lake-medium.jpg" alt="" /></div>
  <div className='wrapper'><img src="https://www.thoughtco.com/thmb/KAc9b99sev8BSY25Od7PqpT61R0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-841965988-59c67827685fbe0011219921.jpg" alt="" /></div>
  <div className='wrapper'><img src="https://dinoanimals.com/wp-content/uploads/2022/04/Alps-1.jpg" alt="" /></div>
</div>
    </>
  )
}

export default App
