import React, { useEffect, useState } from 'react';
import './Statistics.scss';
import smile from '../../assets/smile.png';

const statisticsData = [
  { label: 'HAPPY STUDENTS', maxcount: 700 ,count:0},
  { label: 'FLUTTER DEVELOPER', maxcount: 150 ,count:0},
  { label: 'FRONTEND DEVELOPER', maxcount: 200 ,count:0},
  { label: 'BACKEND DEVELOPER', maxcount: 100 ,count:0},
  { label: 'FULLSTACK DEVELOPER', maxcount: 50 ,count:0},
];

const StatisticsSection = () => {
  const [statistics, setStatistics] = useState(statisticsData);

  useEffect(() => {
    const updateStatistics = () => {
      setStatistics((prevStatistics) =>
        prevStatistics.map((statistic) => {
          if (statistic.count < statisticsData.find((s) => s.label === statistic.label).maxcount) {
            return {
              ...statistic,
              count: statistic.count + 10, // You can adjust the increment value here
            };
          }
          return statistic;
        })
      );
    };

    // Update statistics every .01 second (10 milliseconds)
    const interval = setInterval(updateStatistics, 10);

    // Clean up the interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="statistics">
      {statistics.map((statistic, index) => (
        <div className="st-card" key={index}>
          <img src={smile} alt="" />
          <div className="stats">
            <h1>{statistic.count}+</h1>
            <p>{statistic.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsSection;

