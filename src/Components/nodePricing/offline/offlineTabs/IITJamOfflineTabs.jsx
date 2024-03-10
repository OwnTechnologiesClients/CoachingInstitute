import React, { useEffect, useState } from "react";
import OfflineOneYearPrice from "../offlineOneYearPrice/OfflineOneYearPrice";
import OfflineSixMonthPrice from "../offlineSixMonthPrice/OfflineSixMonthPrice";
import "./IITJamOfflineTabs.scss";


const IITJamOfflineTabs = () => {
    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle: '1 Year Plan',
            title: <OfflineSixMonthPrice />,
        },
        {
            id: 2,
            tabTitle: '2 Year Plan',
            title: <OfflineOneYearPrice />,
        },



    ]
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }
    return (
        <div className='container'>
            <div className='offline-tabs'>
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

export default IITJamOfflineTabs