import React from 'react'

function VideoTab({ videoTitle, videoState, videoCurrentTime, videoDuration, videoPlaybackSpeed, sendPlaybackSpeed, togglePlayPauseRef }) {

  const playIcon = <svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.804 17.804" xmlSpace="preserve"><g><g id="c98_play"><path d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313 c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04 c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"/></g><g id="Capa_1_78_"></g></g></svg>
  const pauseIcon = <svg width="800px" height="800px" viewBox="-1 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-227.000000, -3765.000000)" fill="#000000"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M172,3605 C171.448,3605 171,3605.448 171,3606 L171,3612 C171,3612.552 171.448,3613 172,3613 C172.552,3613 173,3612.552 173,3612 L173,3606 C173,3605.448 172.552,3605 172,3605 M177,3606 L177,3612 C177,3612.552 176.552,3613 176,3613 C175.448,3613 175,3612.552 175,3612 L175,3606 C175,3605.448 175.448,3605 176,3605 C176.552,3605 177,3605.448 177,3606" id="pause-[#1006]"></path></g></g></g></svg>
  const minusIcon = <svg width="800px" height="800px" viewBox="0 -12 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch:type="MSPage"><g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-414.000000, -1049.000000)" fill="#000000"><path d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049" id="minus" sketch:type="MSShapeGroup"></path></g></g></svg>
  const plusIcon = <svg width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch:type="MSPage"><g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" fill="#000000"><path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus" sketch:type="MSShapeGroup"></path></g></g></svg>

  const formatTime = (time, showMilliseconds = false) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    let formattedTime = '';

    if (hours > 0) {
      formattedTime += `${hours.toString().padStart(2, '0')}:`;
    }

    formattedTime += `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (showMilliseconds) {
      const milliseconds = Math.floor((time % 1) * 100); 
      formattedTime += `.${milliseconds}`;
    }

    return formattedTime;
  };

  function handlePlaybackSpeed(data) {
    sendPlaybackSpeed(data)
  }

  function increasePlaybackSpeed() {
    if (videoPlaybackSpeed < 2) {
      handlePlaybackSpeed(videoPlaybackSpeed + 0.25)
    }
  }
  function decreasePlaybackSpeed() {
    if (videoPlaybackSpeed > 0.25) {
      handlePlaybackSpeed(videoPlaybackSpeed - 0.25)
    }
  }

  return (
    <div className='video-tab-container'>
      <div className="video-title">
        <h2>{videoTitle}</h2>
      </div>
      <div className="video-info">
        <div className="info-left">
          <p>By</p>
        </div>
        <div className="info-right">
          <p>fr-FR → es-ES</p>
        </div>
      </div>
      <div className="video-current-status">
        <div className="current-status-text">
          <h2>{videoState}</h2>
        </div>
        <div className="current-status-button">
          <button onClick={() => togglePlayPauseRef.current()}>
            {videoState === "playing" ? pauseIcon : playIcon}
          </button>
        </div>
      </div>
      <div className="video-time-speed">
        <div className="video-time">
          <h2 className='current-time'>{formatTime(videoCurrentTime, true)} /&nbsp;</h2>
          <h2 className='video-duration'>{formatTime(videoDuration)}</h2>
        </div>
        <div className="video-speed">
          <p className="speed-text">Speed:</p>
          <div className="speed-controls">
            <button className='minus-btn' onClick={decreasePlaybackSpeed}>{minusIcon}</button>
            <div className='speed-percent'>{videoPlaybackSpeed*100}%</div>
            <button className='plus-btn' onClick={increasePlaybackSpeed} >{plusIcon}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoTab