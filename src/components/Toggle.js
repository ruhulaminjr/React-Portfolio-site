import React,{useState} from 'react';
import {motion} from 'framer-motion';

const Toggle = ({title,children})=>{
    const [toggle,setToggle] = useState(false);
    return (
      <motion.div className="question" onClick={()=>setToggle(!toggle) } layout>
          <motion.h4 layout>{title}</motion.h4>
            {toggle ? children:""}
        <div className="faq-line"></div>
      </motion.div>
    );
}

export default Toggle;