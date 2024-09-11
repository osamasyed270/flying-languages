import React, { useEffect, useState, useRef } from 'react'

function VideoPlayer({ sendVideoTitle, sendVideoState, sendCurrentTime, sendDuration, sendPlaybackSpeed, videoPlaybackSpeed, togglePlayPauseRef }) {

  // const [player, setPlayer] = useState(null)
  let player = useRef(null);

  // Setting the script tag and iframe tag
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      player.current = new window.YT.Player('video-player', {
        videoId: 'j6dymA2wfRM',
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    };
  }, []);

  // Functions for sending values to parent component
  function handleVideoTitle(data) {
    sendVideoTitle(data)
  }
  function handleVideoState(data) {
      sendVideoState(data)
  }
  function handleCurrentTime(data) {
      sendCurrentTime(data)
  }
  function handleDuration(data) {
      sendDuration(data)
  }
  function handlePlaybackSpeed(data) {
      sendPlaybackSpeed(data)
  }
  
  // This function is called when video is ready to play
  const onPlayerReady = (event) => {
    handleVideoTitle(event.target.videoTitle);
    handleVideoState("cued")
    handleDuration(event.target.getDuration())
    handlePlaybackSpeed(event.target.getPlaybackRate())

    setInterval(() => {
      handleCurrentTime(event.target.getCurrentTime());
    }, 100);
  }; 

  // This useEffect is used to change the speed of the video
  useEffect(() => {
    if (player.current) {
      player.current.setPlaybackRate(videoPlaybackSpeed); 
    }
  }, [videoPlaybackSpeed]);
  
  // This function is used to play or pause the video when user click on play button
  const togglePlayPause = () => {
    if (player.current) {
      const playerState = player.current.getPlayerState();
      if (playerState === window.YT.PlayerState.PLAYING) {
        player.current.pauseVideo();
      } else {
        player.current.playVideo();
      }
    }
  };

  // This useEffect is used to send togglePlayPause function to parent component
  useEffect(() => {
    togglePlayPauseRef.current = togglePlayPause;
  }, [togglePlayPauseRef]);
  
  // This function updates the videoState variable based on the current state
  const changeVideoState = (playerStatus) => {
    if (playerStatus === -1) {
      handleVideoState("unstarted")
    } else if (playerStatus === 0) {
      handleVideoState("ended")
    } else if (playerStatus === 1) {
      handleVideoState("playing")
    } else if (playerStatus === 2) {
      handleVideoState("paused")
    } else if (playerStatus === 3) {
      handleVideoState("buffering")
    } else if (playerStatus === 5) {
      handleVideoState("cued")
    } 
  }

  // This function is called when the video's state changes (e.g., playing, paused, etc.)
  const onPlayerStateChange = (event) => {
    changeVideoState(event.data)
  };

  

  return (
    <div className="small-container video-player-container" id='video-player-container'>
      <div id="video-player"></div>
    </div>
  )
}

export default VideoPlayer