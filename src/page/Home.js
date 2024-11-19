import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "../assete/css/home.css";
import Header from './Header';
import home_head from "../assete/images/home head.jpg";
import choose_pic from "../assete/images/choose us.jpg";
import about_pic_1 from "../assete/images/about main.jpg";
import project_pic from "../assete/images/project.jpg";
import service_pic from "../assete/images/service-img-1.jpg";
import service_pic_1 from "../assete/images/service-img-2.jpg";
import service_pic_2 from "../assete/images/service-img-3.jpg";
import service_pic_3 from "../assete/images/service-img-4.jpg"; 
import Footer from './Footer';

const Home = () => {
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
    <div className='construction_head_main'>
        <div className='construction_head_pic'>
            <img src={home_head} alt="" />
        </div>
    </div>

    <div className='construction_choose_div'>
        <div className='construction_choose_div_1'>
            <img src={choose_pic} alt=""/>
        </div>
        <div className='choose_main_div'>
            <div className='choose_main_div_1'>
                <h3>WHY CHOOSE US</h3>
            </div>
            <div className='choose_main_div_2'>
                <h1>Solving Construction Challenges With Modern Techniques</h1>
            </div>
            <div className='choose_main_div_3'>
                <h3>In Today’s construction landscape, we leverage modern techniques like Building Information Modeling (BIM) and sustainable materials to effectively address challenges, ensuring timely project completion.</h3>
            </div>
        </div>
    </div>

    <div className='construction_about_div'>
        <div className='about_main_div'>

            <div className='about_main_div_conts'>
            <h2>ABOUT OUR COMPANY</h2>
                <h1>Shaping the Future of Construction</h1>
                <h3>We are committed to redefining the construction industry with innovative solutions, cutting-edge technology, and sustainable practices. Our team of experts ensures every project is crafted</h3>
            </div>
            <div className='about_sub_div_1'>
            <div className='about_sub_pic'>
                <img src={about_pic_1} alt=""/>
            </div>
            <div className='about_projct'>
                <div className='about_projct_1'>
                    <h2>500+</h2>
                    <p>Complete Project</p>
                </div>
                <div className='about_projct_2'>
                    <h2>450+</h2>
                    <p>Client Review</p>
                </div>
            </div>
        </div>
        </div>
       
    </div>
    

    <div className='project_main_div'>
        <div className='project_main_div_1'>
            <div className='project_div_1'>
                <h2>Latest Creations</h2>
                <h1>View Our Completed Projects</h1>
                <div className='project_btn'>
                    <button ><Link to="/Service" style={{textDecoration:"none",color:"#fff"}} onClick={construction}>VIEW ALL</Link></button>
                </div>
            </div>
            <div className='project_image_div'>
                <div className='project_image_div_1'>
                    <img src={project_pic} alt="" />
                </div>
            </div>
        </div>
    </div>

    <div className='service_main_div'>
        <div className='service_div_main'>
            <h2>Our services</h2>
            <h1>Our construction services</h1>
            <p>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>
        </div>
        <div className='service_card_pic'>
            <div className='service_card_pic_1'>
            <img src={service_pic} alt="Service 1"/>
            <div className="overlay">
                <h3>Building Construction</h3>
                <p>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
                </div>
            </div>
            <div className='service_card_pic_1'>
            <img src={service_pic_1} alt="Service 2"/>
            <div className="overlay">
                <h3> Architecture Design</h3>
                <p>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
                </div>
            </div>
            <div className='service_card_pic_1'>
            <img src={service_pic_2} alt="Service 3"/>
            <div className="overlay">
                <h3> Building Renovation</h3>
                <p>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
                </div>
            </div>
            <div className='service_card_pic_1'>
            <img src={service_pic_3} alt="Service 4"/>
            <div className="overlay">
                <h3>Building Maintenance</h3>
                <p>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
                </div>
            </div>
        </div>
    </div>

    <div className='looking_main_div'>
        <div className='looking_div_1'>
            <h2>Looking for a 100% quality and affordable constructor for your project?</h2>
        </div>
        <div className='looking_btn'>
            <button><Link to="/Contact" style={{textDecoration:"none",color:"#fff"}} onClick={construction}>Click Here</Link></button>
        </div>
    </div>

    <div className='construction_background_div'>
        <div className='background_div_1'>
            <div className='background_card_div'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 19V5.70046C3 5.27995 3.26307 4.90437 3.65826 4.76067L13.3291 1.24398C13.5886 1.14961 13.8755 1.28349 13.9699 1.54301C13.9898 1.59778 14 1.65561 14 1.71388V6.6667L20.3162 8.77211C20.7246 8.90822 21 9.29036 21 9.72079V19H23V21H1V19H3ZM5 19H12V3.85543L5 6.40089V19ZM19 19V10.4416L14 8.77488V19H19Z"></path></svg>
                <h2>Contractor Service</h2>
                <p>Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.</p>
            </div>
            <div className='background_card_div'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
                <h2>Onsite Supervision</h2>
                <p>Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.</p>
            </div>
            <div className='background_card_div'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.87759 3.00275H19.1319C19.4518 3.00275 19.7524 3.15583 19.9406 3.41457L23.7634 8.67097C23.9037 8.86385 23.8882 9.12895 23.7265 9.30419L12.3721 21.6047C12.1848 21.8076 11.8685 21.8203 11.6656 21.633C11.6591 21.627 7.86486 17.5174 0.282992 9.30419C0.121226 9.12895 0.10575 8.86385 0.246026 8.67097L4.06886 3.41457C4.25704 3.15583 4.55766 3.00275 4.87759 3.00275ZM5.38682 5.00275L2.58738 8.85198L12.0047 19.0541L21.4221 8.85198L18.6226 5.00275H5.38682Z"></path></svg>
                <h2>Building Construction</h2>
                <p>Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.</p>
            </div>
        </div>
    </div>
   <Footer/>
    </>
  )
}

export default Home