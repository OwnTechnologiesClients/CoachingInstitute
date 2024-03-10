import React from 'react'
import "./SixMonthPrice.scss";

// import BronzeSection from '../flutter/bronze/BronzeSection'
import BronzeSection from '../../flutter/bronze/BronzeSection'
import SilverSection from '../../flutter/silver/SilverSection';
import GoldSection from '../../flutter/gold/GoldSection';
// import PlatinumSection from '../../flutter/platinum/PlatinumSection';

const SixMonthPrice = () => {
    return (
        <div className='pricing-row'>
            <BronzeSection />
            <SilverSection />
            <GoldSection />
            {/* <PlatinumSection /> */}

        </div>
    )
}

export default SixMonthPrice