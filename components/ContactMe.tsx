import React from 'react';
import { useState, useEffect  } from 'react'
import Image from 'next/image'
import Button from '../components/button/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Oval} from 'react-loader-spinner'
import { SocialIcon } from 'react-social-icons';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { Social } from '@/typings';


const showToastMessage = (message: string, type: string) => {
    switch (type) {
      case 'success':
        toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'dark',
        autoClose: 2000,
        hideProgressBar: false,
    });
      break;
        
      case 'error':
        toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'dark',
        autoClose: 3000,
        hideProgressBar: false,
    });
      break;

    case 'info':
        toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'dark',
        autoClose: 2000,
        hideProgressBar: false,
    });
      break;
    case 'warning':
        toast.warning(message, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'dark',
        autoClose: 2000,
        hideProgressBar: true,
    });
      break;
    
      default:
        break;
    }
};

type Props = {
    socials: Social[]
};

function ContactMe({ socials }: Props)  {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            offset: 100,
            delay: 100,
            once: false,
          
          });
    }, []);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSendMessage = async ()=>{
        setLoading(true)
        var msg2 = ''
            if(!name || !email || !message){
                setLoading(false)
                showToastMessage('complete all feilds', 'error')
            }
            else{
                try {
                    const data = await fetch(`api/hello`,{
                        method: 'POST',
                        headers: {"Content-type": "application/json"},
                        body: JSON.stringify({
                            name: name,
                            email: email,
                            message: message})
                    }). then(data => data.json()).then(data => msg2 = data.msg)
                    if(msg2 === 'OK'){
                        setLoading(false)
                        showToastMessage('Message sent', 'success')   
                    }
                    else if(msg2 === 'invalid email'){
                        showToastMessage('invalid email', 'error')
                        setLoading(false)
                    }
                    else{
                        showToastMessage('unable to send', 'error')
                        setLoading(false)
                    }
                } catch (error) {
                    setLoading(false)
                }
            }
    } 

    return (
       
        <div  className='bg-[#010514] overflow-hidden text-white mt-[-1rem]  pb-[3rem] '>
            <div className='max-w-[10rem]'>
                <ToastContainer />
            </div>
            <div data-aos="zoom-in-down" className='text-[2.8rem] text-center p-4 ml-[2rem]   text-white text-[2rem] font-semibold tracking-tighter'>
                Contact Me
                <div className='text-[#65C23A] mt-[-0.5rem] tracking-normal text-[1.1rem]'>get in touch with me</div>
            </div>
            <div className='flex flex-col items-center md:flex-row mt-[2rem] gap-[2rem] p-4 md:items-start justify-center'>
                <div className='md:flex grid grid-cols-2 md:flex-col gap-4'>
                    <div data-aos="flip-right"  data-aos-duration="1200" className='pl-[1rem] pr-[1rem] pl-[2rem] max-w-[17rem] pr-[2rem] h-[9.5rem]  flex flex-col gap-4 items-center justify-center bg-[#0f172a]'>
                        <div><Image src='/images/location.png' alt='address' width={40} height={40}/></div>
                        <div className='text-center text-[0.96rem] '>Remote</div>
                    </div>
                    <div data-aos="flip-right"  data-aos-duration="1200" className='pl-[1rem] pr-[1rem] pl-[2rem] break-words max-w-[17rem] pr-[2rem] h-[9.5rem]  flex flex-col gap-4 items-center justify-center bg-[#0f172a]'>
                        <div><Image src='/images/email.png' alt='address' width={40} height={40}/></div>
                        <div className='text-center text-[0.96rem] max-w-[7rem]  max-w-[100%] '>immaculetanwokejeme@gmail.com</div>
                    </div>
                    <div data-aos="flip-right"  data-aos-duration="1200" className='pl-[1rem] pr-[1rem] pl-[2rem] max-w-[17rem] pr-[2rem] h-[9.5rem]  flex flex-col gap-4 items-center justify-center bg-[#0f172a]'>
                        <div><Image src='/images/telephone.png' alt='address' width={40} height={40}/></div>
                        <div className='text-center text-[0.96rem]  '>+234 8032777946</div>
                    </div>
                    <div data-aos="flip-right"  data-aos-duration="1200" className='pl-[1rem] pr-[1rem] pl-[2rem] max-w-[17rem] pr-[2rem] h-[9.5rem]  flex flex-col gap-4 items-center justify-center bg-[#0f172a]'>
                        <div><Image src='/images/verified.png' alt='address' width={40} height={40}/></div>
                        <div className='text-center text-[0.96rem] '>Freelance available</div>
                    </div>
                </div>
                    
                <div data-aos="slide-up"  data-aos-duration="1200" className='flex flex-col items-center gap-4 md:gap-[3rem] md:pt-[3rem] h-[100%] w-[100%] md:w-[70%] max-w-[35rem] bg-[#0f172a] p-[1.1rem] p-[2rem] '>
                    <div className='flex flex-row w-[100%] gap-[1rem] flex-row'>
                        <input className='text-[1rem] p-[0.8rem] w-[100%] w-[50%] bg-[#010514] outline-none focus:outline-none' type="text" placeholder='Enter your name'
                            value={name}
                            onChange={(e)=>{
                                setName(e.target.value)
                            }}
                        />
                        <input className='text-[1rem] p-[0.8rem] w-[100%] w-[50%] bg-[#010514] outline-none focus:outline-none' type="text" placeholder='Enter your email'
                            value={email}
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div className='h-[20rem] md:h-[24.52rem] w-[100%]  break-words'>
                        <textarea className='text-[1rem] p-[0.8rem] w-[100%] h-[100%] bg-[#010514] outline-none focus:outline-none' placeholder='Enter your message'
                            value={message}
                            onChange={(e)=>{
                                setMessage(e.target.value)
                            }}
                        ></textarea>
                    </div>
                    <Button text={loading?
                        <div className='flex flex-row items-center'>
                            <Oval
                                height={18}
                                width={18}
                                color="#ffffff"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="lightgray"
                                strokeWidth={6}
                                strokeWidthSecondary={6}
                            />
                            <div>SENDING</div>
                        </div>
                        : 'SEND MESSAGE'} onClick={handleSendMessage} 
                    />
                </div>

            </div>
        
            <div className='mt-[5rem] flex flex-col gap-5 items-center justify-center'>
                <div className='text-[#65C23A] font-semibold text-lg'>Connect with me on social media</div>
                <div className='flex flex-row'>
                    <div className='cursor-pointer sc hover:scale-125 duration-500 '>
                        {socials.map((social) => (
                            <SocialIcon
                                key={social._id}
                                url={social.url}
                                fgColor='white'
                                bgColor='transparent'
                            />
                        ))}
                    </div>
                </div>
                    
            </div>
        </div>
        
    )
}


export default ContactMe
