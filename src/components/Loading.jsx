import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "../styles/Loader.css";
const Loading = () => {
    
    return (
        <div id ="loader" align='center'>
            <Loader
                type="Audio"
                color="#6D8299"
                height={200}
                width={200}
                timeout={3000} //3 secs
            />
        </div>
    )
}

export default Loading