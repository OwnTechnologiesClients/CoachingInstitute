import React from 'react'
import './Cards.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import queryString from 'query-string';
const WelcomeCard = ({ imgSrc }) => {

    function extractVideoId(url) {
        // Regular expression to match YouTube video ID in various URL formats
        const regex = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

        // Try to match the regex with the URL
        const match = url.match(regex);

        // If there is a match, return the video ID, else return null
        return match ? match[1] : null;
    }

    async function getVideoInfo(videoId) {
        try {
          // Make a request to the get_video_info endpoint
          const response = await axios.get(`http://youtube.com/get_video_info?video_id=${videoId}`);
          
          // Extract the information from the response
          const videoInfo = queryString.parse(response.data);
      
          // Extract title and description
          const title = videoInfo.title;
          const description = videoInfo.description;
      
          console.log('Title:', title);
          console.log('Description:', description);
      
        } catch (error) {
          console.error('Error:', error.message);
        }
      }
      
      // Example usage
      const videoid = extractVideoId('https://www.youtube.com/watch?v=hztH6aLRaiY')
      console.log(getVideoInfo(videoid));
    
    return (
        <div className='welcome-card'>
            <img src={imgSrc} alt="" />
            <div >
                <h2 className='under-bar'>EXPERIENCE YOURSELF</h2>
                <p>We care for children, protect their welfare, and prepare them for the future</p>
            </div>
        </div>
    )
}
const CourseCard = ({ imgSrc }) => {
    const navigate = useNavigate()
    const navigateTo = () => {
        navigate('/courses')
    }
    return (
        <div className='course-card'>
            <div className="price">
                ₹299
            </div>
            <img src={imgSrc} alt="" />
            <div >
                <h2 className='under-bar'>CSIR-NET/JRF</h2>
                <p>We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future</p>
            </div>
            <button onClick={navigateTo}>VIEW DETAILS</button>
        </div>
    )
}
const VideoCard = ({ imgSrc, hrefLink }) => {
    return (
        <div className='video-card'>
            <a href={hrefLink} target='_blank'><img src={imgSrc} alt="" /></a>
            <div >
                <h2 className='under-bar'>CSIR-NET/JRF</h2>
                <p>We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future</p>
            </div>
            <button>WATCH NOW</button>
        </div>
    )
}

export { WelcomeCard, CourseCard, VideoCard }