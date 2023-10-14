import React from 'react'
import waicon from '../../assets/icons/whatsapp.png'
import './WhatsappIcon.scss'
const WhatsappIcon = () => {
  return (
    <div className="whatsapp-icon">
      <img
        href="https://wa.me/your-whatsapp-number"
        target="_blank"
        rel="noopener noreferrer"
        src={waicon} alt=""
      />
    </div>
  )
}

export default WhatsappIcon