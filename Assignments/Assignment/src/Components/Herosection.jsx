import React from 'react'
import One from '../assets/Four.jpg'
import Two from '../assets/Five.jpg'
import Three from '../assets/Six.jpg'

export default function Herosection() {
  return (
    <>
    

   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Three} className="d-block w-100" height={500} alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Two} className="d-block w-100" height={500} alt="..." />
    </div>
    <div className="carousel-item">
      <img src={One} className="d-block w-100" height={500} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    
    
    </>
  )
}
