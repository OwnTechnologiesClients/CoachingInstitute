import React from 'react'
import "./OneYearPrice.scss";

import BronzeSection from '../../mernPricing/bronze/BronzeSection'
import BronzeOneYearSection from '../../mernPricing/bronze/oneYear/BronzeOneYearSection'
import SilverSection from '../../mernPricing/silver/SilverSection';
import GoldSection from '../../mernPricing/gold/GoldSection';

import SilverOneYearSection from '../../mernPricing/silver/oneYear/SilverOneYearSection';
import GoldOneYearSection from '../../mernPricing/gold/oneYear/GoldOneYearSection';
// import PlatinumOneYearSection from '../../mernPricing/platinum/oneYear/PlatinumOneYearSection';

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