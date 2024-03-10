import React from 'react'
import "./OneYearPrice.scss";

import BronzeSection from '../../flutter/bronze/BronzeSection'
import BronzeOneYearSection from '../../flutter/bronze/oneYear/BronzeOneYearSection'
import SilverSection from '../../flutter/silver/SilverSection';
import GoldSection from '../../flutter/gold/GoldSection';

import SilverOneYearSection from '../../flutter/silver/oneYear/SilverOneYearSection';
import GoldOneYearSection from '../../flutter/gold/oneYear/GoldOneYearSection';
// import PlatinumOneYearSection from '../../flutter/platinum/oneYear/PlatinumOneYearSection';

const OneYearPrice = () => {
    return (
        <div className='pricing-row'>
            <BronzeOneYearSection />
            <SilverOneYearSection />
            <GoldOneYearSection />
            {/* <PlatinumOneYearSection /> */}

        </div>
    )
}

export default OneYearPrice