import React, { useRef, useState } from 'react'
import style from './style.module.css';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { RiFullscreenFill } from "react-icons/ri";
import { RiFullscreenExitFill } from "react-icons/ri";
import { MdVolumeOff } from "react-icons/md";
import { MdVolumeDown } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";
import { MdForward10 } from "react-icons/md";
import { MdReplay10 } from "react-icons/md";









export default function Player({ thumbnail }) {

  const [previewPos, setPreviewPos] = useState("")

  const videoContainer = document.querySelector('.video-container')
  const currentTime = document.querySelector('.current-time')
  const totalTime = document.querySelector('.total-time')



  const toggleMute = () => {
    const video = document.querySelector('.video')

    video.muted = !video.muted
  }

  const setVolume = (e) => {
    const video = document.querySelector('.video')

    video.volume = e.target.value
    video.muted = e.target.value === 0
  }

  const changeSlider = () => {
    const video = document.querySelector('.video')
    const videoContainer = document.querySelector('.video-container')
    const volumeSlider = document.querySelector('.volume-slider')



    volumeSlider.value = video.volume
    let volumeLevel
    if (video.muted || video.volume === 0) {
      volumeSlider.value = 0
      volumeLevel = "mute"
    }
    else if (video.volume >= 0.5) {
      volumeLevel = "high"
    }
    else {
      volumeLevel= "low"
    }
    videoContainer.dataset.volumeLevel = volumeLevel
  }

  const toggleFullScreen = () => {
    const videoContainer = document.querySelector('.video-container')
    const video = document.querySelector('.video')


    videoContainer.classList.toggle('full-screen')
    if (document.fullscreenElement == null) {
      videoContainer.requestFullscreen()
    }
    else {
      document.exitFullscreen()
    }
  }

  const togglePlay = () => {
    const video = document.querySelector('.video')


    video.paused ? video.play() : video.pause()
  }

  const addPause = () => {
    const videoContainer = document.querySelector('.video-container')

    videoContainer.classList.add('paused')
  }

  const removePause = () => {
    const videoContainer = document.querySelector('.video-container')

    videoContainer.classList.remove('paused')
  }
  
  const leadingZeroFormatter = new Intl.NumberFormat(undefined, {minimumIntegerDigits: 2,})

  function formatDuration (time) {
    const seconds = Math.floor (time % 60)
    const minutes = Math.floor ((time / 60) % 60)
    const hours = Math.floor (time / 3600)
    if (hours === 0 ) {
      return `${minutes}:${leadingZeroFormatter.format(seconds)}`
    }
    else {
      return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`
    }
  }

  const videoDuration = () => {
    const video = document.querySelector('.video')
    const totalTime = document.querySelector('.total-time')

    totalTime.textContent = formatDuration(video.duration)
  }

  const videoCurrentTime = () => {
    const video = document.querySelector('.video')
    const currentTimeElement = document.querySelector('.current-time')
    const timelineContainer = document.querySelector('.timeline-container')

    currentTimeElement.textContent = formatDuration(video.currentTime)
    const percent = video.currentTime / video.duration
    timelineContainer.style.setProperty('--progress-position', percent)
  }

  const skip = (duration) => {
    const video = document.querySelector('.video')

    video.currentTime += duration
  }

  
  const handleTimelineUpdate = (e) => {
    const video = document.querySelector('.video')
    const timelineContainer = document.querySelector('.timeline-container')
    const previewImg = document.querySelector('.preview-img')
    const thumbnailImg = document.querySelector('.thumbnail-img')

    const rect = timelineContainer.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
    const previewImgNumber = Math.max(1, Math.floor((percent * video.duration) / 10))
    const previewImgSrc = `/vidd${previewImgNumber}`
    previewImg.src = previewImgSrc;
    timelineContainer.style.setProperty('--progress-position', percent)

    if (isScrubbing) {
      e.preventDefault()
      thumbnailImg.src = previewImgSrc
      timelineContainer.sty

    }
    return percent
  }

  const keyboardPause = (e) => {
    switch(e.key.toLowerCase()){
      case " ": 
        togglePlay
        
    }
  }


  return (
    <div className={`video-container paused`} onKeyDown={keyboardPause} data-volume-level="high"> 
        <img className='thumbnail-img'></img>
        <div className={`controls-container`}>
            <div className='timeline-container' style={{'--preview-position': `${previewPos}`}} onMouseMove={handleTimelineUpdate}>
              <div className='timeline' style={{'--preview-position': `${previewPos}`}}>
                <img className='preview-img'></img>
                <div className='thumb-indicator'></div>
              </div>
            </div>
            <div className={`controls`}>
                <button className={`play-pause`} onClick={togglePlay}>
                    <span className='play-icon'><FaPlay /></span>
                    <span className='pause-icon'><FaPause /></span>
                </button>
                <div className='skip-time'>
                  <button className='skip-backward' onClick={()=> skip(-10)}><MdReplay10 /></button>
                  <button className='skip-forward' onClick={()=> skip(10)}><MdForward10 /></button>
                </div>
                <div className='volume-container'>
                  <button className='mute-btn' onClick={toggleMute}>
                    <span className='volume-mute-icon'><MdVolumeOff /></span>
                    <span className='volume-low-icon'><MdVolumeDown /></span>
                    <span className='volume-high-icon'><MdVolumeUp /></span>
                  </button>
                  <input type='range' min={'0'} max={'1'} step={'any'} className='volume-slider' onInput={setVolume}></input>
                </div>
                <div className='duration-container'>
                  <div className='current-time'>0:00</div>
                  /
                  <div className='total-time'>10:00</div>
                </div>
                <button className='full-screen-btn' onClick={toggleFullScreen}>
                  <span className='open'><RiFullscreenFill /></span>
                  <span className='close'><RiFullscreenExitFill /></span>
                </button>
            </div>
        </div>
        <video src='https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' poster={thumbnail} className={`video`} onPlay={removePause} onPause={addPause} onVolumeChange={changeSlider} onLoadedData={videoDuration} onTimeUpdate={videoCurrentTime}></video>
    </div>
  )
}
