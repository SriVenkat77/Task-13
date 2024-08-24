import React from 'react'

function Showcase({detail}) {
  return (
    <>
     <div className="row g-0">
                <div className="col-lg-6 text-white showcase-img"    ><img src={detail.image} alt=""/></div>
                <div className="col-lg-6 my-auto showcase-text">
                    <h2>{detail.title}</h2>
                    <p className="lead mb-0">{detail.descrip}</p>
                </div>
            </div>
    
    </>
  )
}

export default Showcase