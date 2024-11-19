import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from './Header';
import "../assete/css/service.css";
import service_pic from "../assete/images/service head.jpg";
import typePic1 from "../assete/images/background.jpg";
import typePic2 from "../assete/images/about main.jpg";
import typePic3 from "../assete/images/about sub.jpg";
import typePic4 from "../assete/images/service-img-1.jpg";
import typePic5 from "../assete/images/choose us.jpg";
import typePic6 from "../assete/images/company-history-img.jpg";
import Footer from "./Footer";

const Service = () => {
    const [currentImage, setCurrentImage] = useState(typePic1); // Set default image

    // Function to handle button click
    const handleButtonClick = (image) => {
      setCurrentImage(image);
    };

    const navigate = useNavigate();

    const construction = () => {
      navigate("");
   
      
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };
  return (
    <>
    <Header/>
    <div className='service_mian_div'>
        <img src={service_pic} alt="" />
    </div>
    <div className='service_types_div'>
        <div className="service_type_box">
        <div className='type_div_1'>
            <h2>Categories</h2>
            <button onClick={() => handleButtonClick(typePic1)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg> Building Construction</button>
        <button onClick={() => handleButtonClick(typePic2)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg> Architecture Design</button>
        <button onClick={() => handleButtonClick(typePic3)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg> Building Renovation</button>
        <button onClick={() => handleButtonClick(typePic4)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg> Flooring & Roofing</button>
        <button onClick={() => handleButtonClick(typePic5)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg> Building Maintenance</button>
        <button onClick={() => handleButtonClick(typePic6)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg> Project Management</button>
        </div>
        </div>
        <div className='type_pic'>
        <img src={currentImage} alt="Service Type" />
        </div>
    </div>

    <div className="service_constructor">
        <div className="service_constructor_div">
            <div className="service_constructor_div_1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"></path></svg>
                <h2>Contractor Service</h2>
                <p>Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.</p>
            </div>
            <div className="service_constructor_div_1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z"></path></svg>
                <h2>Onsite Supervision</h2>
                <p>Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.</p>
            </div>
            <div className="service_constructor_div_1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7.00002C16.4183 7.00002 20 10.5817 20 15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15C4 10.5817 7.58172 7.00002 12 7.00002ZM12 10.5L10.6775 13.1797L7.72025 13.6094L9.86012 15.6953L9.35497 18.6406L12 17.25L14.645 18.6406L14.1399 15.6953L16.2798 13.6094L13.3225 13.1797L12 10.5ZM13 1.99902L18 2.00002V5.00002L16.6366 6.13758C15.5305 5.55773 14.3025 5.17887 13.0011 5.04951L13 1.99902ZM11 1.99902L10.9997 5.04943C9.6984 5.17866 8.47046 5.55738 7.36441 6.13706L6 5.00002V2.00002L11 1.99902Z"></path></svg>
                <h2>Building Construction</h2>
                <p>Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.</p>
            </div>
        </div>
    </div>

    <div className="service_card_div">
        <div className="service_card_div_1">
            <div className="service_card_div_2">
                <h2>You Still Have A Question</h2>
                <p>if you cannot find answer to your question our FAQ, you can alwas contact us. web will answer you shortly!</p>
                <div className="card_btn">
                    <h1><Link to="info@domain.com" style={{textDecoration:"none"}}>info@domain.com</Link></h1>
                    <h4><Link to="8569745852" style={{textDecoration:"none"}}>8569745852</Link></h4>
                </div>
            </div>
        </div>
        <div className="card_conts_div">
            <h2>The future of sustainable building practices</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage.</p>
            <p>of Lorem Ipsum, you need t.variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going</p>
        </div>
     </div>   

     <div className="last_banner_pic">
        <div className="last_banner_div">
        <div className="last_banner_pic_1">
            <h2>Begin Your Dream Project Today!</h2>
        </div>
        <div className="last_pic_2">
            
            <button><Link to="/Contact" style={{textDecoration:"none",color:"#fff"}} onClick={construction}>Contact</Link> </button>
        </div>
        </div>
     </div>
     <Footer/>
    </>
  )
}

export default Service