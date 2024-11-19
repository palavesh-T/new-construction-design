import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../assete/css/footer.css';
// import foot_pic from "../Assate/logo/mainlogo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  const navigate = useNavigate();

  const construction = () => {
    navigate("");
 
    
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-row">
        <div className="footer-col">
          <div className='foot_logo'>
              {/* <img src={foot_pic} alt=""/> */}
          </div>
          <p>leading construction firm renowned for innovative architectural designs and high-quality construction projects. They specialize in planning, design, general construction, and building modeling, ensuring excellence in every project. </p>
          {/* <h4>Company</h4>
          <ul>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Our Services</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Affiliate Program</Link></li>
          </ul> */}
        </div>
        <div className="footer-col">
          <div className='footer_addrs'>
          <h4>Address</h4>
         <p><i className="fas fa-map-marker-alt"></i> mainroda city </p>
         <p>mount city lonadn</p>
         <p> <i className="fas fa-mobile-alt"></i><Link to="tel:"> +91-8569745896</Link> </p>
         <p><i className="fas fa-mobile-alt"></i><Link to="tel:"> +91-8569745236</Link></p>
         <p><i className="fas fa-mobile-alt"></i> <Link to="tel:">8569874589</Link></p>
         <p><i className="fas fa-envelope"></i><Link to="">  info@domain.com</Link> </p>
        </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/Home" onClick={construction}>Home</Link></li>
            <li><Link to="/About" onClick={construction}>About</Link></li> 
            <li><Link to="/Service" onClick={construction}>Service</Link></li>
          <li><Link to="/Contact" onClick={construction}>Contact</Link></li> 
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <Link to=""><i className="fab fa-facebook-f"></i></Link>
            <Link to=""><i className="fab fa-twitter"></i></Link>
            <Link to=""><i className="fab fa-youtube"></i></Link>
            <Link to=""><i className="fab fa-instagram"></i></Link>
            {/* <Link to="/"><i className="fab fa-linkedin-in"></i></Link> */}
          </div>
        
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer