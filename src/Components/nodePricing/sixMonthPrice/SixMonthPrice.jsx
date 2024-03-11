import React from 'react'
import "./SixMonthPrice.scss";

// import BronzeSection from '../nodePricing/bronze/BronzeSection'
import BronzeSection from '../../nodePricing/bronze/BronzeSection'
import SilverSection from '../../nodePricing/silver/SilverSection';
import GoldSection from '../../nodePricing/gold/GoldSection';
// import PlatinumSection from '../../nodePricing/platinum/PlatinumSection';

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