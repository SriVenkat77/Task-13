import React, { useEffect, useState } from 'react';
import Icongrid from './Components/Icongrid'
import Showcase from './Components/Showcase'
import Review from './Components/Review'
import Extra from './Components/Extra'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function App() {

  let data = [{
    name:"Responsive",
    desp:"Looks great on any screen size!",
    icon : <><div><i class="fa-solid fa-mobile"></i></div></>
  },
  {
    name:"Redesigned",
    desp:"Freshly redesigned for Bootstrap 5.0",
    icon : <><div><i class="fa-solid fa-pencil"></i></div></>
  },
  {
    name:"Favorited",
    desp:"Millions of users favourite! Start Bootstrap!",
    icon : <><div><i class="fa-solid fa-heart"></i></div></>
  },
  
]

let detail = [
  {
    title:"Fully Responsive Design",
    descrip:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    image : "https://web.dev/static/articles/responsive-images/image/art-direction-example-2a99df174349c.png",
  },
  {
    title:"Updated For Bootstrap 5",
    descrip:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    image : "https://img.freepik.com/free-photo/website-html-code-browser-view-printed-white-paper-closeup-view_211682-166.jpg",
  },
  {
    title:"Easy to Use & Customize",
    descrip:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    image : "https://s3.envato.com/files/380138729/01_preview.__large_preview.png",
  },
  {
    title:"Favourited",
    descrip:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    image : "https://media.istockphoto.com/id/1056449208/photo/staying-up-to-date-with-technology-in-a-fast-moving-world-concept-a-young-asian-woman-is.jpg?s=612x612&w=0&k=20&c=gl-seqPznaHvRw1ne17hAT7nt882lbw4eMhutejIwaU=",
  }
]

let info  = [{
  name:"Margaret E.",
  desp:"This is fantastic! Thanks so much guys!",
  image : "data:image/jpeg;base64,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",
},
{
  name:"Fred S.",
  desp:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
  image : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/44caa40f-0c82-4a15-aaaf-c1146cfb31ee/dhhzddx-4210b2b0-6b5d-4291-b044-02867cc965dd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ0Y2FhNDBmLTBjODItNGExNS1hYWFmLWMxMTQ2Y2ZiMzFlZVwvZGhoemRkeC00MjEwYjJiMC02YjVkLTQyOTEtYjA0NC0wMjg2N2NjOTY1ZGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.elf6UvzJeEpHmZBaGsWW_OCj_klVqbuDtY9sa25SkCY",
},
{
  name:"Sarah W.",
  desp:"Thanks so much for making these free resources available to us!",
  image : "data:image/jpeg;base64,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",
} ]


const rows = document.querySelectorAll('.showcase .row');
    
    rows.forEach((row, index) => {
        const imgCol = row.querySelector('.showcase-img');
        const textCol = row.querySelector('.showcase-text');
        
        if (index % 2 !== 0) { // For odd indices, swap the columns
            row.insertBefore(textCol, imgCol);
        }
    });


  return (
    <>
      {/* <!-- Navigation--> */}
        <nav className="navbar navbar-light bg-primary static-top">
            <div className="container">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <a className="btn btn-info" href="#signup">Sign Up</a>
            </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header className="masthead bg-black bg-gradient">
            <div className="container position-relative back " >
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            {/* <!-- Page heading--> */}
                            <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                            
                            <form className="form-subscribe" id="contactForm" >
                                {/* <!-- Email address input--> */}
                                <div className="row">
                                    <div className="col">
                                        <input className="form-control form-control-lg" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                                    </div>
                                    <div className="col-auto"><button className="btn btn-primary btn-lg " id="submitButton" type="submit">Submit</button></div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
{/* <!-- Icons Grid--> */}
<section className="features-icons bg-light text-center">
        <div className="container">
            <div className="row">
                          
            {
    data.map((e,i)=>{
      return <Icongrid data={e} key = {i}/>
    })
   }   
            </div>
        </div>
    </section>
    {/* <!-- Image Showcases--> */}
    <section className="showcase">
        <div className="container-fluid p-0">
        {
    detail.map((e,i)=>{
      return <Showcase detail={e} key = {i}/>
    })
   }
        </div>
    </section>
        
      {/* <!-- Testimonials--> */}
    <section className="testimonials text-center bg-light">
        <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
            <div className="row">
                
            {
    info.map((e,i)=>{
      return <Review info={e} key = {i}/>
    })
   }
                
            </div>
        </div>
    </section>  
       
        {/* <!-- Call to Action--> */}
        <section className="call-to-action text-white text-center bg-black bg-gradient" id="signup">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4">Ready to get started? Sign up now!</h2>
                        
                        <form className="form-subscribe" id="contactFormFooter" >
                            {/* <!-- Email address input--> */}
                            <div className="row">
                                <div className="col">
                                    <input className="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                                </div>
                                <div className="col-auto"><button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
                            </div>
                         
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
    <ul className="list-inline mb-2">
    <li className="list-inline-item"><a href="#!">About</a></li>
        <li className="list-inline-item">⋅</li>
        <li className="list-inline-item"><a href="#!">Contact</a></li>
        <li className="list-inline-item">⋅</li>
        <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
        <li className="list-inline-item">⋅</li>
        <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
    </ul>
    <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
    </div>
 <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-facebook fs-3"></i></a>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="bi-twitter fs-3"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!"><i className="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </footer> 

    </>
  )
}

export default App
