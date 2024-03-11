import React from 'react'
import "./OneYearPrice.scss";

import BronzeSection from '../../reactPricing/bronze/BronzeSection'
import BronzeOneYearSection from '../../reactPricing/bronze/oneYear/BronzeOneYearSection'
import SilverSection from '../../reactPricing/silver/SilverSection';
import GoldSection from '../../reactPricing/gold/GoldSection';

import SilverOneYearSection from '../../reactPricing/silver/oneYear/SilverOneYearSection';
import GoldOneYearSection from '../../reactPricing/gold/oneYear/GoldOneYearSection';
// import PlatinumOneYearSection from '../../reactPricing/platinum/oneYear/PlatinumOneYearSection';

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