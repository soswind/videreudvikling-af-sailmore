import React, { useState } from "react";

export default function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
      setIsOpen(!isOpen);
    }
  
  return (
    <>
      <button className={`accordion ${isOpen ? 'active' : ''}`} onClick={handleOpen}>{props.title}</button>
      <div className={`accordion_panel ${isOpen ? 'active' : ''}`}>
        {props.description}
      </div>
    </>
  )
}