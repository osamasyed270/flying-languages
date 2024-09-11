import React, { useState, useEffect, useRef  } from 'react'

import VideoPlayer from './components/VideoPlayer'
import TranslatedCaptions from './components/TranslatedCaptions'
import OriginalCaptions from './components/OriginalCaptions'

import Tabs from './components/Tabs'
import LessonTab from './components/LessonTab'
import VideoTab from './components/VideoTab'

function MainContainer() {

    // Calculate the height and width of window START
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleHeightResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener('resize', handleHeightResize);
        return () => window.removeEventListener('resize', handleHeightResize);

    }, []);
    useEffect(() => {
        const handleWidthResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleWidthResize);
        return () => window.removeEventListener('resize', handleWidthResize);
    }, []);
    // Calculate the height and width of window END

    const [videoTitle, setVideoTitle] = useState('');
    const [videoState, setVideoState] = useState('');    
    const [currentTime, setCurrentTime] = useState(0);    
    const [duration, setDuration] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const togglePlayPauseRef = useRef(null);

    // Funtions to update usestate variables
    function handleVideoTitle(data) {
        setVideoTitle(data)
    }
    function handleVideoState(data) {
        setVideoState(data)
    }
    function handleCurrentTime(data) {
        setCurrentTime(data)
    }
    function handleDuration(data) {
        setDuration(data)
    }
    function handlePlaybackSpeed(data) {
        setPlaybackSpeed(data)
    }

  return (
    <div className="main-container">
        <div className="main-container-left">
            <VideoPlayer 
                sendVideoTitle={handleVideoTitle} 
                sendVideoState={handleVideoState} 
                sendCurrentTime={handleCurrentTime} 
                sendDuration={handleDuration}  
                sendPlaybackSpeed={handlePlaybackSpeed} 
                videoPlaybackSpeed={playbackSpeed} 
                togglePlayPauseRef={togglePlayPauseRef} 
            />
            <TranslatedCaptions />

            {/* Show the OriginalCaptions Component according to the window height */}
            {(windowHeight > 550 && windowWidth > 700) 
            ? (<OriginalCaptions />) : (<></>)}
        </div>
        <div className="main-container-right">
            <Tabs>
                <VideoTab tabTitle="Video" 
                    videoTitle={videoTitle} 
                    videoState={videoState} 
                    videoCurrentTime={currentTime} 
                    videoDuration={duration} 
                    videoPlaybackSpeed={playbackSpeed} 
                    sendPlaybackSpeed={handlePlaybackSpeed} 
                    togglePlayPauseRef={togglePlayPauseRef} 
                />
                <LessonTab tabTitle="Lesson" videoState={videoState} togglePlayPauseRef={togglePlayPauseRef} />

                {/* Show the OriginalCaptions Component according to the window height */}
                {(windowHeight < 550 && windowWidth > 700) || (windowHeight > 550 && windowWidth < 700) || (windowHeight < 550 && windowWidth < 700)
                ? (<OriginalCaptions tabTitle="Original Captions" />) : (<></>)}
            </Tabs>
        </div>
      </div>
  )
}

export default MainContainer