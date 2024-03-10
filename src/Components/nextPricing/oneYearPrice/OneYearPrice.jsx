import React from 'react'
import "./OneYearPrice.scss";

import BronzeSection from '../../nextPricing/bronze/BronzeSection'
import BronzeOneYearSection from '../../nextPricing/bronze/oneYear/BronzeOneYearSection'
import SilverSection from '../../nextPricing/silver/SilverSection';
import GoldSection from '../../nextPricing/gold/GoldSection';

import SilverOneYearSection from '../../nextPricing/silver/oneYear/SilverOneYearSection';
import GoldOneYearSection from '../../nextPricing/gold/oneYear/GoldOneYearSection';
// import PlatinumOneYearSection from '../../nextPricing/platinum/oneYear/PlatinumOneYearSection';

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