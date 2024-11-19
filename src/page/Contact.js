import React, {useState} from 'react';
import "../assete/css/contact.css";
import Header from './Header';
import contsct_pic from "../assete/images/about head.jpg";
import conts_pic_1 from "../assete/images/contact-info-img.png";
import Footer from './Footer';
import {ContactusApi} from "../service/Api";

const Contact = () => {
    
    const [formData, setFormData] = useState({
        user_name: '',
        user_phone: '',
        user_email: '',
        user_message: ''
      });
      const [errorMessage, setErrorMessage] = useState('');
      const [successMessage, setSuccessMessage] = useState('');
    //   const [recaptchaToken, setRecaptchaToken] = useState('');
      const handleChange = (e) => {
        const { id, value } = e.target;
       
     if (id === "user_name") {
    const onlyLetters = /^[A-Za-z\s]+$/;
    if (!onlyLetters.test(value)) {
    setFormData({ ...formData, [id]: '' }); 
    setErrorMessage("Name is required");
    return;
    } else {
    setFormData({ ...formData, [id]: value });
    setErrorMessage(""); 
    }
    }
    

        else if (id === "user_phone") {
          const onlyNumbers = /^[0-9]*$/;
          if (!onlyNumbers.test(value)) {
            setErrorMessage("Invalid Phone Number");
            return;
          }
        }  else if (id === "user_email") {
              
          if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
            setErrorMessage("Enter valid email address.");
          } else {
            setErrorMessage(""); 
          }
        }
      
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = async () => {
       
        if (
          formData.user_name.trim() === '' ||
          formData.user_phone.trim() === '' ||
          formData.user_email.trim() === '' ||
          formData.user_message.trim() === ''
        ) {
            
          setErrorMessage('All fields are required');
          setTimeout(() => {
            
            setErrorMessage('');
          }, 5000);
          return;
        }
        // if (!recaptchaToken) {
        //   setErrorMessage('Please complete the reCAPTCHA');
        //   return;
        // }
        try {
    
          setErrorMessage('');
          const response = await ContactusApi(formData);
          console.log('Form data saved:', response.data);
          setSuccessMessage(' submitted successfully!');
          setFormData({
            user_name: '',
            user_phone: '',
            user_email: '',
            user_message: ''
          });
          setTimeout(() => {
            setSuccessMessage('');
          }, 2000);
        
        } catch (error) {
          console.error('Error saving form data:', error);
        }
      };
  return (
    <>
    <Header/>
    <div className='contact_main_div'>
        <img src={contsct_pic} alt=""/>
    </div>
    <div className='contact_div_1'>
        <div className='contact_div_2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
            <h2>call support center 24/7</h2>
            <p>+1 809 120 6705</p>
            <p>+1 809 120 6705</p>
        </div>
        <div className='contact_div_2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 8.12811L20.4668 8.69379C20.2864 9.10792 19.7136 9.10792 19.5331 8.69379L19.2866 8.12811C18.8471 7.11947 18.0555 6.31641 17.0677 5.87708L16.308 5.53922C15.8973 5.35653 15.8973 4.75881 16.308 4.57612L17.0252 4.25714C18.0384 3.80651 18.8442 2.97373 19.2761 1.93083L19.5293 1.31953C19.7058 0.893489 20.2942 0.893489 20.4706 1.31953L20.7238 1.93083C21.1558 2.97373 21.9616 3.80651 22.9748 4.25714L23.6919 4.57612C24.1027 4.75881 24.1027 5.35653 23.6919 5.53922L22.9323 5.87708C21.9445 6.31641 21.1529 7.11947 20.7134 8.12811ZM19.9999 11C20.7012 11 21.3744 10.8797 22 10.6586V20C22 20.5523 21.5523 21 21 21H2V4C2 3.44772 2.44772 3 3 3H14.3413C14.1202 3.62556 13.9999 4.29873 13.9999 5C13.9999 6.44366 14.5098 7.76824 15.3593 8.80348L11.9999 11.6829L5.6507 6.24074L4.34912 7.75926L11.9999 14.3171L16.8855 10.1294C17.7934 10.6818 18.8595 11 19.9999 11Z"></path></svg>
            <h2>write to us</h2>
            <p>info@domain.com</p>
            <p>support@domain.com</p>
        </div>
        <div className='contact_div_2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 5L9 2L15 5L21.303 2.2987C21.5569 2.18992 21.8508 2.30749 21.9596 2.56131C21.9862 2.62355 22 2.69056 22 2.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V5ZM15 19.7639V7.17594L14.9352 7.20369L9 4.23607V16.8241L9.06476 16.7963L15 19.7639Z"></path></svg>
            <h2>visit us</h2>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>

        </div>
    </div>
    <div className='contact_main_div_form'>
        <div className='contact_div_card'>
            <div className='contact_div_card_1'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg>
            <h2>Call Support Center 24/7</h2>
            <p>+1 809 120 6705</p>
            </div>
            <div className='contact_div_card_2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 8.12811L20.4668 8.69379C20.2864 9.10792 19.7136 9.10792 19.5331 8.69379L19.2866 8.12811C18.8471 7.11947 18.0555 6.31641 17.0677 5.87708L16.308 5.53922C15.8973 5.35653 15.8973 4.75881 16.308 4.57612L17.0252 4.25714C18.0384 3.80651 18.8442 2.97373 19.2761 1.93083L19.5293 1.31953C19.7058 0.893489 20.2942 0.893489 20.4706 1.31953L20.7238 1.93083C21.1558 2.97373 21.9616 3.80651 22.9748 4.25714L23.6919 4.57612C24.1027 4.75881 24.1027 5.35653 23.6919 5.53922L22.9323 5.87708C21.9445 6.31641 21.1529 7.11947 20.7134 8.12811ZM2 4C2 3.44772 2.44772 3 3 3H14V5H4.5052L12 11.662L16.3981 7.75259L17.7269 9.24741L12 14.338L4 7.22684V19H20V11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4Z"></path></svg>
                <h2>Write To Us</h2>
                <p>info@domain.com</p>
            </div>
            <div className='contact_card_pic'>
                <img src={conts_pic_1} alt=""/>
            </div>
        </div>
        <div className='contact_form_main_div_hed'>
            <div className='from_conts'>
                <h2>Contact us</h2>
                <p>Get in touch with us</p>
            </div>
                <div className='cont_form'>
                    <input type="text" placeholder='Enter Your Name' id="user_name" value={formData.user_name} onChange={handleChange} />
                    <input type="Email" placeholder='Enter Your Email' id="user_email" value={formData.user_email} onChange={handleChange}/>
                </div>
                <div className='cont_form_1'>
                    <input type="text" placeholder='Enter Your Number' id="user_phone" value={formData.user_phone} onChange={handleChange}/>
                </div>
                <div className='cont_form_2'>
                    <textarea type="text" placeholder='Enter Your Message' id='user_message' value={formData.user_message} onChange={handleChange}/>
                </div>
                {errorMessage && <div className="error-message" style={{ color: 'red' }}>{errorMessage}</div>}
                {successMessage && <div className="success-message" style={{ color: 'green' }}>{successMessage}</div>}
                <div className='cont_form_btn'>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact