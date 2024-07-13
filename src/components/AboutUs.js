import React from 'react';
import './AboutUs.css';

// Import the images
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import member1 from '../assets/images/member1.jpg';
import member2 from '../assets/images/member2.jpg';
import member3 from '../assets/images/member3.jpg';
import member4 from '../assets/images/member4.jpg';
import member5 from '../assets/images/member5.jpg';
import member6 from '../assets/images/member6.jpg';
import image1985 from '../assets/images/1985.jpg';
import image1990 from '../assets/images/1990.jpg';
import image2001 from '../assets/images/2001.jpg';
import { FaCheckCircle } from 'react-icons/fa';  // Import tick mark icon from react-icons

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="intro-section">
        <div className="intro-images">
          <img src={image1} alt="Team meeting" />
          <img src={image2} alt="Office workspace" />
        </div>
        <div className="intro-text">
          <p className="welcome-text">• WELCOME TO OUR COMPANY</p>
          <h1>Connecting People And Build Technology</h1>
          <p className="experience-text" style={{ color: 'green' }}>Years of Experience</p>
          <p className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul className="tick-list">
            <li><FaCheckCircle className="tick-icon" /> All in one IT solution company</li>
            <li><FaCheckCircle className="tick-icon" /> Amazing expert teams</li>
            <li><FaCheckCircle className="tick-icon" /> Quality solutions for business</li>
            <li><FaCheckCircle className="tick-icon" /> 24/7 quick supports</li>
          </ul>
          <button className="cta-button">Read More About Us</button>
        </div>
      </div>

      <div className="stats">
        <div>200+ Total Employees</div>
        <div>10+ Completed Projects</div>
        <div>20+ Winning Awards</div>
        <div>900+ Client Reviews</div>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <img src={image1985} alt="1985" />
          <h3>1985</h3>
          <p>Start with a small service</p>
        </div>
        <div className="timeline-item">
          <img src={image1990} alt="1990" />
          <h3>1990</h3>
          <p>First employees</p>
        </div>
        <div className="timeline-item">
          <img src={image2001} alt="2001" />
          <h3>2001</h3>
          <p>First recognition</p>
        </div>
      </div>

      <div className="steps">
        <div className="step">
          <img src="path/to/image4.jpg" alt="Project Discussion" />
          <h4>Project Discussion</h4>
          <p>Explanation of the project discussion phase.</p>
        </div>
        <div className="step">
          <img src="path/to/image5.jpg" alt="Testing & Trying" />
          <h4>Testing & Trying</h4>
          <p>Explanation of the testing & trying phase.</p>
        </div>
        <div className="step">
          <img src="path/to/image6.jpg" alt="Execute & Install" />
          <h4>Execute & Install</h4>
          <p>Explanation of the execute & install phase.</p>
        </div>
        <div className="step">
          <img src="path/to/image7.jpg" alt="We Care About" />
          <h4>We Care About</h4>
          <p>Explanation of the we care about phase.</p>
        </div>
      </div>

      <div className="team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-row">
            <div className="member">
              <img src={member1} alt="Brandon Copperfield" />
              <div className="member-info">
                <h3>Brandon Copperfield</h3>
                <p>Founder & CEO</p>
              </div>
            </div>
            <div className="member">
              <img src={member2} alt="Clark Roberts" />
              <div className="member-info">
                <h3>Clark Roberts</h3>
                <p>Chief Finance Officer</p>
              </div>
            </div>
            <div className="member">
              <img src={member3} alt="Ashley Hardy" />
              <div className="member-info">
                <h3>Ashley Hardy</h3>
                <p>VP Sales and Marketing</p>
              </div>
            </div>
          </div>
          <div className="team-row">
            <div className="member">
              <img src={member4} alt="Dennis Norris" />
              <div className="member-info">
                <h3>Dennis Norris</h3>
                <p>Chief Marketing Officer</p>
              </div>
            </div>
            <div className="member">
              <img src={member5} alt="Gina Kennedy" />
              <div className="member-info">
                <h3>Gina Kennedy</h3>
                <p>Admin Assistant</p>
              </div>
            </div>
            <div className="member">
              <img src={member6} alt="Fernanda Torres" />
              <div className="member-info">
                <h3>Fernanda Torres</h3>
                <p>Tax Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;