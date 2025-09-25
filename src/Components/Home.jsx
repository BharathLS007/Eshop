import React from 'react'
import Navbar from './Navbar'
function Home() {
  return (
    <div>
        <Navbar/>
     <div className="container mt-5">
  <h1 className="text-primary">Hello Bootstrap</h1>
 <button type="button" class="btn btn-danger">Danger</button>
</div>

    </div>
  )
}

export default Home
