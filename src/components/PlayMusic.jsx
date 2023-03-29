import Navbar from "./Navbar";
import {
  BsSkipBackwardCircleFill,
  BsFillFastForwardCircleFill,
} from "react-icons/bs";
import TrendingMusic, { AllTimeFav, MyMusic } from "./MusicData";
import { BsFillPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

function PlayMusic() {
  // Location
  const { state } = useLocation();
  // useState
  const [song, setSong] = useState(state);
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //   useRef
  const audioPlayer = useRef(); //reference this is audio container
  const progressBar = useRef(); // refference our progess
  const animationRef = useRef(); //reffrence our animation

  // use effect
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMinutes}:${returnSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = play;
    setPlay(!prevValue);
    if (prevValue) {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    } else {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100} %`
    );
    setCurrentTime(progressBar.current.value);
  };

  const controls = (type, value) => {
    setPlay(false)
    audioPlayer.current.pause();
    const playList =
      song.listName === "TrendingMusic"
        ? TrendingMusic
        : song.listName === "AllTimeFav"
        ? AllTimeFav
        : MyMusic;
    
    if (type === "forward") {
      let key = value.index+1;
      if (playList[key] === undefined) return
      let updatedData = {
        artist_name: playList[key].artist_name,
        imgsrc: playList[key].imgsrc,
        index: key,
        listName: playList[key].list_name,
        path: playList[key].src,
      };
      setSong(updatedData)
      audioPlayer.current.play();
    }

    if (type === "backward") {
      let key = value.index-1;
      if (playList[key] === undefined) return
      let updatedData = {
        artist_name: playList[key].artist_name,
        imgsrc: playList[key].imgsrc,
        index: key,
        listName: playList[key].list_name,
        path: playList[key].src,
      };
      setSong(updatedData)
    }
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="music-img">
          <img src={song.imgsrc} height={200} width={200} alt="NotFound" />
        </div>
        <div className="content">
          <h1> {song.artist_name} </h1>

          <div className="playerBar">
            <div className="currTime">{calculateTime(currentTime)}</div>

            <div>
              <input
                type="range"
                className="progressBar"
                defaultValue="0"
                ref={progressBar}
                onChange={changeRange}
              />
            </div>

            <div className="durTime">
              {duration && !isNaN(duration) && calculateTime(duration)}
            </div>
          </div>

          <div className="audioPlayer">
            <audio id="audioPart" ref={audioPlayer} src={song.path}></audio>
            <button onClick={() => controls("backward", song)}>
              <BsSkipBackwardCircleFill />
            </button>

            <button onClick={togglePlayPause}>
              {play ? <BsPauseCircleFill /> : <BsFillPlayCircleFill />}
            </button>

            <button onClick={() => controls("forward", song)}>
              <BsFillFastForwardCircleFill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayMusic;
