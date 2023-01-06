import React from 'react'
import Web3 from '../Assets/images/image-web-3-desktop.jpg'
import './Body.css'

function Body() {
  return (
    <div className='Body'>
        <div className='leftside-body'>
            <div className='image-container'>
                <img src={Web3} alt="" className='bodyimage'/>
            </div>
            <div className='leftsub'>
                <div>
                    <strong className='info'>The Bright Future of the Web 3.0?</strong>
                </div>
                <div>
                    <span className='subspan'>We dive int the next evolution 
                    of the web that  claims to put the power of the hands of the people. But is it really fullfilling is promising?
                    </span>
                    <button className='btn'>Read More</button>
                </div>
            </div>
        </div>
        <div className='rightside-body'>
            <h1>New</h1>
            <h3>Hydrogen VS Electric Cars</h3>
            <span>
                Will hydrogen fuel car ever catch up to the EVs?
            </span>
            <br />
            <hr />
            <h3>The download of all artistry </h3>
            <span>
               What are the possible adverse effect of on-demand AI image generation
            </span>
            <br />
            <hr />
            <h3>Is VC Funding Dring up</h3>
            <span>
               Private funding by VC firms is down 50% YOY.
               We take  a look at what that means.
            </span>
        </div>
      
    </div>
  )
}

export default Body
