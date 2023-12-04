import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import './Loader.scss'
const Loader = () => {
    return (
        <div className="loader-spinner">
            <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="70"
            visible={true}
        />
        </div>
    )
}

export default Loader