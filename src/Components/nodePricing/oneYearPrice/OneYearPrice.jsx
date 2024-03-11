import React from 'react'
import "./OneYearPrice.scss";

import BronzeSection from '../../nodePricing/bronze/BronzeSection'
import BronzeOneYearSection from '../../nodePricing/bronze/oneYear/BronzeOneYearSection'
import SilverSection from '../../nodePricing/silver/SilverSection';
import GoldSection from '../../nodePricing/gold/GoldSection';

import SilverOneYearSection from '../../nodePricing/silver/oneYear/SilverOneYearSection';
import GoldOneYearSection from '../../nodePricing/gold/oneYear/GoldOneYearSection';
// import PlatinumOneYearSection from '../../nodePricing/platinum/oneYear/PlatinumOneYearSection';

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