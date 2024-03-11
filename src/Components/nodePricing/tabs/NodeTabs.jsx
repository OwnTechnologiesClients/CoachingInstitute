import React, { useEffect, useState } from "react";
import OneYearPrice from "../../nodePricing/oneYearPrice/OneYearPrice";
// import SixMonthPrice from "../sixMonthPrice/SixMonthPrice";
import SixMonthPrice from "../../nodePricing/sixMonthPrice/SixMonthPrice";
import "./NodeTabs.scss";


const NodeTabs = () => {
    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        
        {
            id: 1,
            tabTitle: 'Online Pricing',
            title: <SixMonthPrice/>,
        },
        {
            id: 2,
            tabTitle: 'Offline Pricing',
            title: <OneYearPrice/>,
        },
        


    ]
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }
    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button
                        key={i}
                        id={tab.id}
                        disabled={currentTab === `${tab.id}`}
                        onClick={(handleTabClick)}>

                        {tab.tabTitle}

                    </button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` &&
                            <div>
                                <p>{tab.title}</p>
                                <p>{tab.content}</p>
                            </div>
                        }

                    </div>

                )}

            </div>

        </div>
    )
}

export default NodeTabs