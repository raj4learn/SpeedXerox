import React, {useState} from 'react';
import {FaRegCaretSquareUp} from 'react-icons/fa';
import { Button } from './FloatToTop';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     <FaRegCaretSquareUp onClick={scrollToTop} style={{width:"60px", height:"60px", display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}
  
export default ScrollButton;
