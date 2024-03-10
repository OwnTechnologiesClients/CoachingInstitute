import React from 'react'
import "./SixMonthPrice.scss";

// import BronzeSection from '../reactPricing/bronze/BronzeSection'
import BronzeSection from '../../reactPricing/bronze/BronzeSection'
import SilverSection from '../../reactPricing/silver/SilverSection';
import GoldSection from '../../reactPricing/gold/GoldSection';
// import PlatinumSection from '../../reactPricing/platinum/PlatinumSection';

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