import React from 'react'
import "./SixMonthPrice.scss";

// import BronzeSection from '../nextPricing/bronze/BronzeSection'
import BronzeSection from '../../nextPricing/bronze/BronzeSection'
import SilverSection from '../../nextPricing/silver/SilverSection';
import GoldSection from '../../nextPricing/gold/GoldSection';
// import PlatinumSection from '../../nextPricing/platinum/PlatinumSection';

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