import React from 'react'
import Button from '../../components/button.jsx';
import images from '../../assets/images.jsx';
import "./LandingPage.css";
import Quizlogo from "../../assets/quizlogo.png";
const LandingPage = () => {
  return (

      <div className="landing-container">
        <header className="header">
            <div className='logo'>
                <img src={images.UULogo} alt="" />
                <h1>x</h1>
                <img src={images.ITUtsav} alt="" />
            </div>
          </header>

        <div className="dotbg">
          <main className="main-content">
            <div className="row">
              <div className="left">
                <img src={Quizlogo} alt=""  className="quizLogo"/>
                <p className="subtitle">
                  <span className="headingColor">Quiz Competition💭</span>
                  <br />
                  <span className="headingColorBold">
                  Presented By:
                  </span>
                   <span className="ansColor">IT🌐 - UTSAV 3.0 🎉</span>
                  <br />
                  <span className="headingColorBold">Organised By:</span>
                  <span className="ansColor">Uttaranchal School Of Computing Sciences 🎓</span>
                </p>
                <Button text="Get Started →" link='/login' />
              </div>
              <div className="right">
                <img src={images.PC} alt="Quiz Banner" />
              </div>
            </div>
          </main>
        </div>
        <footer className="footer">
      <p>All Right's Reserved - Uttaranchal School Of Computer Sciences © | Uttaranchal University, Dehradun</p>
    </footer>
      </div>
    );    
}

export default LandingPage