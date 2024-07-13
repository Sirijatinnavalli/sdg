import React from 'react';
import image1985 from '../assets/images/1985.jpg';
import image1990 from '../assets/images/1990.jpg';
import image2001 from '../assets/images/2001.jpg';
import './TimeLine.css';
const TimeLine=()=>{ 
    return ( 
<div className="timeline">
<div className="timeline-item">
<h2 className='h3'>1985</h2>
  <img src={image1985} alt="1985" />
  
  <p>Start with a small service</p>
</div>
<div className="timeline-item">
<h2 className='h3'>1990</h2>
  <img src={image1990} alt="1990" />
  
  <p>First employees</p>
</div>
<div className="timeline-item">
<h2 className='h3'>2001</h2>
  <img src={image2001} alt="2001" />
  
  <p>First recognition</p>
</div>
</div>
)
}

export default TimeLine;