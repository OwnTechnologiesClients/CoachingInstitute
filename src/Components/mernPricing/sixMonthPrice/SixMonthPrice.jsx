import React from 'react'
import "./SixMonthPrice.scss";

// import BronzeSection from '../mernPricing/bronze/BronzeSection'
import BronzeSection from '../../mernPricing/bronze/BronzeSection'
import SilverSection from '../../mernPricing/silver/SilverSection';
import GoldSection from '../../mernPricing/gold/GoldSection';
// import PlatinumSection from '../../mernPricing/platinum/PlatinumSection';

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