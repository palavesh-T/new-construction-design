import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assete/css/about.css";
import Header from './Header';
import about_pic_1 from "../assete/images/bk.jpg";
import about_pic_2 from "../assete/images/about home.jpg";
import history_pic from "../assete/images/company-history-img.jpg";
import finla_pic from "../assete/images/cta-box-img.png";
import Footer from './Footer';

const About = () => {
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
    <div className='about_main_div_head'>
        <div className='about_main_pic_add'>
            <img src={about_pic_1} alt=""/>
        </div>
    </div>

    <div className='about_div_1'>
        <div className='about_div_2'>
            <img src={about_pic_2} alt=""/>
        </div>
        <div className='about_conts_div'>
            <h3>About Us</h3>
            <h1>Crafting structures
            that last a lifetime</h1>
            <p>Crafting structures that last a lifetime requires a holistic approach that integrates advanced materials, resilient design, regular maintenance, and sustainability practices. By learning from historical examples and leveraging modern technology.</p>
            <div className='about_conts_div_1'>
                <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.67127 4.25705L13.4142 12L12 13.4142L8.55382 9.96803C8.20193 10.5635 8 11.2582 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.87494 14.3429 8.13693 12.2503 8.00771L10.4459 6.20323C10.9416 6.07067 11.4625 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.7042 6.41079 9.50428 7.10925 8.52347L5.68014 7.09436C4.62708 8.44904 4 10.1513 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C10.8915 4 9.83557 4.22547 8.8757 4.63306L7.37443 3.13179C8.75768 2.40883 10.3311 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.87842 3.43029 6.09091 5.67127 4.25705Z"></path></svg> Comprehensive Services</h2>
                <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.67127 4.25705L13.4142 12L12 13.4142L8.55382 9.96803C8.20193 10.5635 8 11.2582 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.87494 14.3429 8.13693 12.2503 8.00771L10.4459 6.20323C10.9416 6.07067 11.4625 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.7042 6.41079 9.50428 7.10925 8.52347L5.68014 7.09436C4.62708 8.44904 4 10.1513 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C10.8915 4 9.83557 4.22547 8.8757 4.63306L7.37443 3.13179C8.75768 2.40883 10.3311 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.87842 3.43029 6.09091 5.67127 4.25705Z"></path></svg> Advanced Technology</h2>
                <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.67127 4.25705L13.4142 12L12 13.4142L8.55382 9.96803C8.20193 10.5635 8 11.2582 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.87494 14.3429 8.13693 12.2503 8.00771L10.4459 6.20323C10.9416 6.07067 11.4625 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 10.7042 6.41079 9.50428 7.10925 8.52347L5.68014 7.09436C4.62708 8.44904 4 10.1513 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C10.8915 4 9.83557 4.22547 8.8757 4.63306L7.37443 3.13179C8.75768 2.40883 10.3311 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.87842 3.43029 6.09091 5.67127 4.25705Z"></path></svg> Transparent Communication</h2>
            </div>
            <div className='about_cal_div'>
                <div className='about_cal_div_1'>
                    <button><Link to="/Contact" onClick={construction} style={{textDecoration:"none",color:"#fff"}}>Click Here</Link></button>
                </div>
                <div className='about_cal_div_2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
                <div>
    <h4>Call Support Center 24X7</h4>
    <h5>+1 809 120 6705</h5>
  </div>
                </div>
            </div>
        </div>
    </div>

    <div className='about_history'>
        <div className='abut_history_main_div'>
            <div className='history_div'>
                <img src={history_pic} alt=""/>
            </div>
            <div className='history_conts_div'>
                <h2>our history</h2>
                <h1>Crafting structures
                that last a lifetime</h1>
                <p>We specialize in a wide range of construction services, including residential, commercial, and industrial projects. From initial design to final inspection, we work closely with our clients to understand their unique needs and vision.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            </div>
        </div>
    </div>

    <div className='about_mission_div'>
        <div className='about_mission_div_1'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.4267 20 20 16.4267 20 12C20 7.57333 16.4267 4 12 4C7.57333 4 4 7.57333 4 12C4 16.4267 7.57333 20 12 20ZM12 18C8.68 18 6 15.32 6 12C6 8.68 8.68 6 12 6C15.32 6 18 8.68 18 12C18 15.32 15.32 18 12 18ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
            <h2>our mission</h2>
            <p>Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.</p>
        </div>
        <div className='about_mission_div_1'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
            <h2>our vision</h2>
            <p>Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.</p>
        </div>
        <div className='about_mission_div_1'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.3685 4.39807L10.8842 10.433L12.6163 11.433L16.1006 5.39807C20.27 8.17002 22.4058 12.4771 20.6605 15.5C18.8003 18.7221 13.4717 18.8551 8.75027 16.1292C4.0289 13.4033 1.47976 8.72208 3.34002 5.50001C5.08527 2.47715 9.88324 2.17321 14.3685 4.39807ZM15.8842 1.77277L17.6163 2.77277L16.1163 5.37084L14.3842 4.37084L15.8842 1.77277ZM6.73233 20H17.0003V22H5.01761C4.94008 22.0014 4.86194 21.9938 4.78481 21.9768C4.77025 21.9735 4.7558 21.97 4.74147 21.9662C4.6589 21.944 4.57784 21.9108 4.50028 21.866C4.47106 21.8492 4.44301 21.831 4.41616 21.8118C4.30161 21.7292 4.20524 21.623 4.1342 21.5003C4.06328 21.3772 4.01939 21.2404 4.00518 21.0997C4.00446 21.0924 4.00381 21.085 4.00325 21.0777C3.98786 20.883 4.02924 20.6819 4.13425 20.5L6.38425 16.6029L8.1163 17.6029L6.73233 20Z"></path></svg>
            <h2>our values</h2>
            <p>Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.</p>
        </div>
    </div>

    <div className='about_final_div'>
        <div className='about_final_div_1'>
            <div className='final_div_1'>
                <h1>Let's bulid something great
                together!</h1>
                <p>Don’t wait any longer to bring your construction dreams to life. Partner with Builtup and experience unparalleled service and quality.</p>
                <div className='final_div_btn'>
                    <button><Link to="/Service" style={{textDecoration:"none",color:"#fff"}} onClick={construction}>Click Here</Link></button>
                </div>
            </div>
            <div className='final_div_pic'>
                <img src={finla_pic} alt=""/>
            </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default About