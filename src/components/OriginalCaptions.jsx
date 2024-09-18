import React, {useState, useEffect} from 'react'

function OriginalCaptions({ videoCurrentTime }) {
  const [allData, setAllData] = useState([])

  useEffect(() =>{
    fetch('https://api.dev-srv.flyinglanguages.com/videoLesson/slug/the-two-party-system-is-very-flawed')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllData(data.videoLesson.transcription[0].transcriptMapping)
      })
  }, [])

  return (
    <div className='small-container original-caption-container'>
      <div className="original-caption-inner">
        {allData.map((item, index) => {
          
          return (
            <span key={index}>
              <div className={item.start_time && item.end_time && videoCurrentTime >= item.start_time && videoCurrentTime <= item.end_time ? "active" : ""} >{item.word}</div>
              <div> </div>
            </span>
          )
        })
        }
        
      </div>
    </div>
  )
}

export default OriginalCaptions