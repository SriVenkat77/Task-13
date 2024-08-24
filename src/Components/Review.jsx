import React from 'react'

function Review({info}) {
  return (
    <> 
    
                <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={info.image} alt="..." />
                        <h5>{info.name}</h5>
                        <p className="font-weight-light mb-0">{info.desp}</p>
                    </div>
                </div>
                
                
           
    
    </>
  )
}

export default Review