import React from 'react'
import './Cards.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { SetActiveCourse } from '../../redux/userSlice'

const WelcomeCard = ({ imgSrc, title, description, alttag, caption }) => {

    // function extractVideoId(url) {
    //     // Regular expression to match YouTube video ID in various URL formats
    //     const regex = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    //     // Try to match the regex with the URL
    //     const match = url.match(regex);

    //     // If there is a match, return the video ID, else return null
    //     return match ? match[1] : null;
    // }

    // async function getVideoInfo(videoId) {
    //     try {
    //       // Make a request to the get_video_info endpoint
    //       const response = await axios.get(`http://youtube.com/get_video_info?video_id=${videoId}`);

    //       // Extract the information from the response
    //       const videoInfo = queryString.parse(response.data);

    //       // Extract title and description
    //       const title = videoInfo.title;
    //       const description = videoInfo.description;

    //       console.log('Title:', title);
    //       console.log('Description:', description);

    //     } catch (error) {
    //       console.error('Error:', error.message);
    //     }
    //   }

    //   // Example usage
    //   const videoid = extractVideoId('https://www.youtube.com/watch?v=hztH6aLRaiY')
    //   console.log(getVideoInfo(videoid));

    return (
        <div className='welcome-card'>
            <img src={imgSrc} alt={alttag} caption={caption} />
            <div >
                <h2 className='under-bar'>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}
const CourseCard = ({ imgSrc, price, homeCourseHeading, homeCourseDetail, url }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    // const navigateTo = (homeCourseHeading) => {
    //     dispatch(SetActiveCourse(homeCourseHeading))
    //     navigate(SetActiveCourse(homeCourseHeading))
    // }
    return (
        <div className='course-card'>
            {/* <div className="price">
                ₹{price}
            </div> */}
            <img src={imgSrc} alt="" />
            <div className='parent-box' >
                <h2 className='under-bar'>{homeCourseHeading}</h2>
                <p>{homeCourseDetail}</p>
            </div>
            <button onClick={() => {
                navigate(url)
            }}>VIEW DETAILS</button>
        </div>
    )
}

const VideoCard = ({ videourl }) => {
    console.log(videourl)
    return (
        <div className='video-card'>
            <iframe src={videourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen></iframe>
        </div>
    )
}

export { WelcomeCard, CourseCard, VideoCard }