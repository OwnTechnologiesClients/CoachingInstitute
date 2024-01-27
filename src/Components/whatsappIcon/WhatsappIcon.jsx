import React from 'react'
import waicon from '../../assets/icons/whatsapp.png'
import './WhatsappIcon.scss'
const WhatsappIcon = () => {
  return (
    <div className="whatsapp-icon">
      <a
        href="https://wa.me/+919910765616?text="
        target="_blank"
      ><img
          src={waicon} alt="whatsapp icon" caption="showing whatsapp icon to click for contact"
        />
      </a>
    </div>
  )
}

export default WhatsappIcon